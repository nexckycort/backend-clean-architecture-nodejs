import { AuthenticationToken } from 'domain/interfaces/jwt-token'
import { RijndaelAdapter } from 'domain/interfaces/rijndael'
import { Auth } from 'domain/models/authentication-model'
import { IAuthenticationService } from './interfaces/authentication'
import { ISessionService } from './interfaces/session'
import { IUserService } from './interfaces/user'

export class AuthenticationService implements IAuthenticationService {
  constructor(private readonly userService: IUserService, private readonly rijndaelAdapter: RijndaelAdapter, private readonly jwtAdapter: AuthenticationToken, private readonly sessionService: ISessionService) {}

  async auth(email: string, password: string): Promise<Auth | null> {
    const userAlReadyExist = await this.userService.findByEmail(email)
    if (userAlReadyExist === undefined) return null

    const isPassCorret = await this.rijndaelAdapter.decrypt(password, userAlReadyExist.password, userAlReadyExist.salt)
    if (isPassCorret === false) return null

    const token = await this.jwtAdapter.token(userAlReadyExist._id)

    await this.sessionService.create({
      userId: userAlReadyExist._id,
      token
    })

    return {
      user: {
        name: userAlReadyExist.name,
        email: userAlReadyExist.email
      },
      token
    }
  }
}
