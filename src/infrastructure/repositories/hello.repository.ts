import { BaseRepository } from 'infrastructure/repositories/base/base-repository'

export class HelloRepository extends BaseRepository<string> {
  getHello() {
    return 'Hello World!'
  }
}
