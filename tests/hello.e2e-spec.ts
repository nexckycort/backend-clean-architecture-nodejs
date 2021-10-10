import supertest from 'supertest'

import app from '../src/app/config/app'

describe('server', () => {
  const request = supertest(app.server)

  it('Should send a success response', (done) => {
    void request.get('/status').then((response) => {
      expect(response.status).toBe(200)
      done()
    })
  })
})
