import { Logger } from './logger'

describe('Logger', () => {
  it('logger', (done) => {
    Logger.info('')
    Logger.debug('')
    Logger.error('')
    done()
  })
})
