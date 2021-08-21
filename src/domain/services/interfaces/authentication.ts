import { Auth } from 'domain/models/authentication-model'

export interface IAuthenticationService {
  auth: (email: string, password: string) => Promise<Auth | null>
}
