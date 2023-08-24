'use strict'

const { bootstrap, createServer } = require('./server')
const server = createServer()

bootstrap(server)
