const apiRoute = require('./routes/api.route')
const compression = require('compression')
const config = require('./config')
const express = require('express')
const http = require('http')

const app = express()

const createServer = () => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(compression())

    app.use('/api', apiRoute())

    // CATCH ALL ROUTES AND SEND IT DEFAULT MESSAGE
    app.get('*', (req, res) => res.status(200).send({
        message: 'Hello darkness, my old friend',
    }));

    return app
}

const bootstrap = (app) => {
    const { port } = config.app

    return http.createServer(app).listen(port, (error) => {
        if (error) console.log(error)

        console.log(`Server is running on: ${port}`)
    })
}

module.exports = {
    createServer,
    bootstrap
}
