import { SessionRepository } from 'infrastructure/repositories/session-repository'
import { NewSession, Session } from 'domain/models/session-model'
import { ISessionService } from './interfaces/session'
import { IUserService } from './interfaces/user'

export class SessionService implements ISessionService {
  constructor(private readonly sessionRepository: SessionRepository, private readonly userService: IUserService, readonly expiresIn: number) {}

  async create({ userId, token }: NewSession) {
    const expired = new Date()
    expired.setMinutes(expired.getMinutes() + this.expiresIn)

    const session = new Session(userId, token, expired)
    const sessionRecord = await this.sessionRepository.create(session)
    return sessionRecord
  }

  async validate(token: string) {
    const currentDate = new Date()
    const expired = new Date()
    expired.setMinutes(currentDate.getMinutes() + this.expiresIn)

    const sessionRecord = await this.sessionRepository.findByToken(token)
    if (sessionRecord === undefined) return

    const { _id } = sessionRecord
    Reflect.deleteProperty(sessionRecord, '_id')
    if (currentDate > sessionRecord.expired) {
      await this.sessionRepository.delete({ _id })
      return
    }

    sessionRecord.expired = expired
    await this.sessionRepository.updateByPk(_id, sessionRecord)

    const { name, email } = await this.userService.findByPk(sessionRecord.user_id)
    return {
      token: sessionRecord.token,
      user: {
        name,
        email
      }
    }
  }
}
