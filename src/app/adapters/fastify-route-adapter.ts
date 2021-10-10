import { FastifyRequest, FastifyReply } from 'fastify'

import { Controller, HttpRequest } from 'infrastructure/entry-points/api/interfaces'

export const AdaptRoute = (controler: Controller) => {
  return async (req: FastifyRequest, res: FastifyReply) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers
    }
    const httpResponse = await controler.handle(httpRequest)
    void res.status(httpResponse.statusCode).send(httpResponse.body)
  }
}
