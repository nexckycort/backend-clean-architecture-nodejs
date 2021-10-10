import { HelloRepository } from 'infrastructure/repositories/hello.repository'
import { HelloController } from 'infrastructure/entry-points/api/v1/test'
import { HelloService } from 'domain/services'

export const makeHelloController = (): HelloController => {
  const helloRepository = new HelloRepository()
  const helloService = new HelloService(helloRepository)
  const helloController = new HelloController(helloService)
  return helloController
}
