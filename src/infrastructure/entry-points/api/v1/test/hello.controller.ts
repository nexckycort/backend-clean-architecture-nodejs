import { IHelloService } from 'domain/services/hello/hello.implementation'
import { Controller, HttpRequest, HttpResponse } from '../../interfaces'
import { ok, serverError } from '../../helpers/api-response'

export class HelloController implements Controller {
  constructor(private readonly testService: IHelloService) {}
  async handle(_httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      return ok({ data: this.testService.getHello() })
    } catch (error) {
      return serverError(error)
    }
  }
}
