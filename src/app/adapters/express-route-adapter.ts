import { Request, Response } from 'express'

import { Controller } from 'infrastructure/entry-points/api/interfaces/controller'
import { HttpRequest } from 'infrastructure/entry-points/api/interfaces/http'

export const AdaptRoute = (controler: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers
    }
    const httpResponse = await controler.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
