import { FastifyInstance } from 'fastify'

import { routesV1 } from 'infrastructure/entry-points/api/v1'
import { api } from 'app/config/environment'

export default (app: FastifyInstance): void => {
  // validate status
  app.get('/status', (_req, res) => {
    void res.status(200).send()
  })

  app.ready(() => {
    console.info(app.printRoutes())
  })

  // Load API route
  void app.register(routesV1, { prefix: api.prefixV1 })
}
