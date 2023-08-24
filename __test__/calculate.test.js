const request = require('supertest')
const appService = require('../server.js')

const app = appService.createServer()

jest.setTimeout(10000);

describe('POST /api/calculate', () => {
    let server
    const endpoint = '/api/calculate'

    beforeEach(() => {
        server = appService.bootstrap(app)
    })

    afterEach(async () => {
        await server.close()
    })

    it('should response bad request when numbers is empty', async () => {
        const response = await request(server)
            .post(endpoint)
            .send({})
            
        expect(response.status).toBe(400)
        expect(response.body).toEqual({ message: 'The numbers must be an array of number' })
    })

    it('should calculate the sum correctly', async () => {
        const response = await request(server)
            .post(endpoint)
            .send({ numbers: [1, 2, 3, 4, 5] })

        expect(response.status).toBe(200)
        expect(response.body).toEqual({ result: 15 })
    })
});
