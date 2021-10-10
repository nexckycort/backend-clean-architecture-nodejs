import { HelloRepository } from 'infrastructure/repositories/hello.repository'
import { IHelloService } from './hello.implementation'

export class HelloService implements IHelloService {
  constructor(private readonly helloRepository: HelloRepository) {}

  getHello = () => {
    return this.helloRepository.getHello()
  }
}
