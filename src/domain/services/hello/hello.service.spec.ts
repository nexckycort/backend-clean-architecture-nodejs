import { HelloService } from './hello.service'

describe('HelloService', () => {
  let service: HelloService

  beforeEach(async () => {
    service = new HelloService({} as any)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
