import { ok, serverError, unauthorized } from 'infrastructure/entry-points/api/helpers/api-response'
import { HttpRequest, HttpResponse, Controller, IAuthenticationService } from './login-protocols'
import { UnauthorizedError } from '../../errors'
import { Logger } from 'infrastructure/helpers/logger'

export class LoginController implements Controller {
  constructor(private readonly authenticationService: IAuthenticationService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password } = httpRequest.body

      const login = await this.authenticationService.auth(email, password)
      if (login === null) return unauthorized(new UnauthorizedError())

      return ok({ message: 'login successfully', data: login })
    } catch (error) {
      Logger.error('LoginController', error)
      return serverError(error)
    }
  }
}
