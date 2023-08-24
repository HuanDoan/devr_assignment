const axios = require('axios')
const { bootstrap, createServer } = require('./server')
const { stressTest } = require('./config')
const { performance } = require('perf_hooks')

const END_POINT = 'http://localhost:3000/api/calculate'
const NUMBERS = [1, 2, 3, 4, 5]

const makeRequest = async () => {
    try {
        const response = await axios.post(END_POINT, { numbers: NUMBERS })
        return response.data
    } catch (error) {
        if (error.response) {
            console.error(`Request failed with status ${error.response.status}`)
        } else if (error.request) {
            console.error('No response received from the server')
        } else {
            console.error('Error during request:', error.message)
        }
        return null
    }
}

const runPerformanceTest = async () => {
    const server = createServer()
    const listener = bootstrap(server)

    const start = performance.now()

    const promises = []
    for (let i = 0; i < stressTest.concurrentRequests; i++) {
        promises.push(makeRequest())
    }
    
    const results = await Promise.all(promises)

    // Count successful and failed requests
    const successfulRequests = results.filter(result => result !== null).length
    const failedRequests = results.length - successfulRequests

    const end = performance.now()
    const elapsed = (end - start) / 1000  // Convert to seconds

    console.log(`Total requests: ${stressTest.concurrentRequests}`)
    console.log(`Successful requests: ${successfulRequests}`)
    console.log(`Failed requests: ${failedRequests}`)
    console.log(`Elapsed time: ${elapsed.toFixed(2)} seconds`)
    console.log(`Requests per second: ${(stressTest.concurrentRequests / elapsed).toFixed(2)}`)

    await listener.close()
};

runPerformanceTest()
