import { NextFunction, Request, RequestHandler, Response } from 'express'

import { HttpRequest, MiddlewareController } from 'infrastructure/entry-points/api/interfaces'

export const AdaptRouteMiddleware = (...middlewares: MiddlewareController[]): RequestHandler[] => {
  return middlewares.map((middleware) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      const httpRequest: HttpRequest = {
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers
      }
      const httpResponse = await middleware.handle(httpRequest)
      if (httpResponse.statusCode === 200) {
        Object.assign(req.body, httpResponse.body)
        return next()
      }
      res.status(httpResponse.statusCode).json(httpResponse.body)
    }
  })
}
