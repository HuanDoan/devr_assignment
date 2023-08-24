const request = require('supertest')
const appService = require('../server.js')

const app = appService.createServer()

jest.setTimeout(10000);

describe.skip('GET /api/exchange-rates', () => {
    let server
    const endpoint = '/api/exchange-rates'

    beforeEach(() => {
        server = appService.bootstrap(app)
    })

    afterEach(async () => {
        await server.close()
    })

    it('should response the data as an array', async () => {
        const response = await request(server).get(endpoint)

        expect(response.status).toBe(200)
        expect(response.body).toEqual({ data: [] })
    })
})
