const axios = require('axios')
const { apiProviders3 } = require('../config')

const client = axios.create({
    baseURL: apiProviders3.host,
    timeout: 30000,
})

const { accessToken, clientSecret } = apiProviders3

if (accessToken && accessToken !== '') {
    client.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
}

if (clientSecret && clientSecret !== '') {
    client.defaults.headers.common['X-Client-Secret'] = clientSecret
}

client.interceptors.request.use(
    async (config) => {
        // Inject something
    },
    (axiosError) => {
        return Promise.reject(axiosError)
    }
)

client.interceptors.response.use(
    async (config) => {
        // Inject something    
    },
    (axiosError) => {
        return Promise.reject(axiosError)
    }
)

module.exports = client
