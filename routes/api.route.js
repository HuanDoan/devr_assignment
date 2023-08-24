const router = require('express').Router()
const indexController = require('../controllers/index.controller')

module.exports = () => {
    router.post('/calculate', indexController.calculate)
    router.get('/exchange-rates', indexController.exchangeRate)

    return router
}
