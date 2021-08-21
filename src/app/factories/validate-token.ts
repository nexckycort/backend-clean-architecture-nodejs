import { ValidateTokenController } from 'infrastructure/entry-points/api/v1/validate-token'
import { RijndaelAdapter } from 'infrastructure/adapters/rijndael-adapter'
import { SessionRepository } from 'infrastructure/repositories/session-repository'
import { UserRepository } from 'infrastructure/repositories/user-repository'
import { SessionService } from 'domain/services/session-service'
import { rijndaelKey, token } from 'app/config/environment'
import { UserService } from 'domain/services/user-service'

export const makeValidateTokenController = (): ValidateTokenController => {
  const rijndaelAdapter = new RijndaelAdapter(10, rijndaelKey)
  const userRepository = new UserRepository()
  const userService = new UserService(rijndaelAdapter, userRepository)
  const sessionRepository = new SessionRepository()
  const sessionService = new SessionService(sessionRepository, userService, token.expiresIn)
  const validateTokenController = new ValidateTokenController(sessionService)
  return validateTokenController
}
