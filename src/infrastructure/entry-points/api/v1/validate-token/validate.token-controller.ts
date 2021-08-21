import { ok, serverError, unauthorized } from 'infrastructure/entry-points/api/helpers/api-response'
import { UnauthorizedInvalidTokenError } from 'infrastructure/entry-points/api/errors'
import { HttpRequest, HttpResponse, Controller } from './validate.token-protocols'
import { ISessionService } from 'domain/services/interfaces/session'
import { Logger } from 'infrastructure/helpers/logger'

export class ValidateTokenController implements Controller {
  constructor(private readonly sessionService: ISessionService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { authorization } = httpRequest.headers
      const [, token] = authorization.split(' ')

      const sessionAlReadyExist = await this.sessionService.validate(token)
      if (sessionAlReadyExist === undefined) return unauthorized(new UnauthorizedInvalidTokenError())

      return ok({ data: sessionAlReadyExist, message: 'valid token' })
    } catch (error) {
      Logger.error('ValidateTokenController', error)
      return serverError(error)
    }
  }
}
