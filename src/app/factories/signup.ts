import { SignupController } from 'infrastructure/entry-points/api/v1/signup'
import { RijndaelAdapter } from 'infrastructure/adapters/rijndael-adapter'
import { UserRepository } from 'infrastructure/repositories/user-repository'
import { UserService } from 'domain/services/user-service'
import { rijndaelKey } from 'app/config/environment'

export const makeSignupController = (): SignupController => {
  const rijndaelAdapter = new RijndaelAdapter(10, rijndaelKey)
  const userRepository = new UserRepository()
  const userService = new UserService(rijndaelAdapter, userRepository)
  const signupController = new SignupController(userService)
  return signupController
}
