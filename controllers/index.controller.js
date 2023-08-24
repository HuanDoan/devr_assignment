const calculateService = require('../services/calculate.service')
const exchangeRateService = require('../services/exchange-rate.service')

module.exports = {
    calculate: (req, res) => {
        const { numbers } = req.body

        if (! (numbers instanceof Array)) {
            return res.status(400).json({ message: 'The numbers must be an array of number' })
        }

        return res.status(200).json({ result: calculateService.sum(numbers) })
    },

    exchangeRate: async (req, res) => {
        const result = await exchangeRateService.getExchangeRate()

        return res.status(200).json({ data: result })
    }
}
