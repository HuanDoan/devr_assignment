const client1 = require('../clients/provider1.api')
const client2 = require('../clients/provider1.api')
const client3 = require('../clients/provider1.api')
const {
    apiProviders1,
    apiProviders2,
    apiProviders3
} = require('../config')

module.exports = {
    getExchangeRate: async () => {

        // Using Promise.allSettled here instead of Promise.all
        // because we want to retrieve results for all requests,
        // even if some of them fail (rejected promises).
        // Promise.all would reject immediately if any of the requests fail,
        // whereas Promise.allSettled collects results for all promises,
        // providing information about whether each promise fulfilled or rejected.
        const responses = await Promise.allSettled([
            client1.get(apiProviders1.exchangeRateEndpoint),
            client2.get(apiProviders2.exchangeRateEndpoint),
            client3.get(apiProviders3.exchangeRateEndpoint),
        ])

        const exchangeRates = responses.map((response) => {
            if (response.status === 'fulfilled') {
                return response.value.data;
            } else {
                return { error: response.reason.message };
            }
        })

        return exchangeRates
    }
}
