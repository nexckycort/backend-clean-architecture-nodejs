import { Auth } from 'domain/models/authentication-model'
import { NewSession, Session } from 'domain/models/session-model'

export interface ISessionService {
  create: (newSession: NewSession) => Promise<Session | undefined>
  validate: (token: string) => Promise<Auth | undefined>
}
