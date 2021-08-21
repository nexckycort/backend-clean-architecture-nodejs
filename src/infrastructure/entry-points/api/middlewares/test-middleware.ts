import { ok, serverError } from 'infrastructure/entry-points/api/helpers/api-response'
import { Logger } from 'infrastructure/helpers/logger'
import { HttpRequest, HttpResponse, MiddlewareController } from '../interfaces'

export class TestMiddleware implements MiddlewareController {
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      console.log('funciona')
      return ok()
    } catch (error) {
      Logger.error('TestMiddleware', error)
      return serverError(error)
    }
  }
}
