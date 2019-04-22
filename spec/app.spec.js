// Jasmine provides a describe funciton
// Arg 1 - a description
// Arg 2 - logic

const request = require('request')
const base_url = 'https://localhost:8089'

describe('Test app', () => {
    describe('GET /', () => {
        it('returns a status code 200', () => {
            request.get(base_url, (error, response, body) => {
                expect(response.statusCode).toBe(200)
            })
        })
    })

    describe('GET /about', () => {
        it('returns a status code 200', () => {
            request.get(base_url, (error, response, body) => {
                expect(response.statusCode).toBe(200)
            })
        })
    })

    describe('GET /user', () => {
        it('returns a status code 200', () => {
            request.get(base_url, (error, response, body) => {
                expect(response.statusCode).toBe(200)
            })
        })
    })

    describe('GET /transaction', () => {
        it('returns a status code 200', () => {
            request.get(base_url, (error, response, body) => {
                expect(response.statusCode).toBe(200)
            })
        })
    })

    describe('GET /account', () => {
        it('returns a status code 200', () => {
            request.get(base_url, (error, response, body) => {
                expect(response.statusCode).toBe(200)
            })
        })
    })

    describe('GET /dummyurl', () => {
        it('returns a status code 404', () => {
            request.get(base_url, (error, response, body) => {
                expect(response.statusCode).toBe(404)
            })
        })
    })
})