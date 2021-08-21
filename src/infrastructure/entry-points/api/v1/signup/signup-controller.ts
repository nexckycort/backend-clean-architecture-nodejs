import { badRequest, ok, serverError } from 'infrastructure/entry-points/api/helpers/api-response'
import { HttpRequest, HttpResponse, Controller } from './signup-protocols'
import { AlReadyExist } from '../../errors'
import { UserService } from 'domain/services/user-service'
import { Logger } from 'infrastructure/helpers/logger'

export class SignupController implements Controller {
  constructor(private readonly userService: UserService) {
    this.userService = userService
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, email, password, role } = httpRequest.body

      const userAlReadyExist = await this.userService.findByEmail(email)
      if (userAlReadyExist !== undefined) {
        return badRequest(new AlReadyExist(email))
      }

      await this.userService.create({ name, email, password, role })
      return ok({ message: 'Successful registration' })
    } catch (error) {
      Logger.error('SignupController', error)
      return serverError(error)
    }
  }
}
