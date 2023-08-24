const dotenv = require('dotenv')

const result = dotenv.config()

if (result.error) throw result.error

module.exports = {
    app: {
        host: process.env.APP_HOST || 'http://localhost',
        port: parseInt(process.env.APP_PORT) || 3000,
    },
    apiProviders1: {
        host: process.env.API_PROVIDER_1_HOST || '',
        accessToken: process.env.API_PROVIDER_1_ACCESS_TOKEN || '',
        clientSecret: process.env.API_PROVIDER_1_CLIENT_SECRET || '',
        exchangeRateEndpoint: process.env.API_PROVIDER_1_EXCHANGE_RATE_ENDPOINT || '',
    },
    apiProviders2: {
        host: process.env.API_PROVIDER_2_HOST || '',
        accessToken: process.env.API_PROVIDER_2_ACCESS_TOKEN || '',
        clientSecret: process.env.API_PROVIDER_2_CLIENT_SECRET || '',
        exchangeRateEndpoint: process.env.API_PROVIDER_2_EXCHANGE_RATE_ENDPOINT || '',
    },
    apiProviders3: {
        host: process.env.API_PROVIDER_3_HOST || '',
        accessToken: process.env.API_PROVIDER_3_ACCESS_TOKEN || '',
        clientSecret: process.env.API_PROVIDER_3_CLIENT_SECRET || '',
        exchangeRateEndpoint: process.env.API_PROVIDER_3_EXCHANGE_RATE_ENDPOINT || '',
    },
    stressTest: {
        concurrentRequests: 1000,
    },
}
