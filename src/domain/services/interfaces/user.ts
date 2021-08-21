import { NewUser, User } from 'domain/models/user-model'

export interface IUserService {
  create: (newUser: NewUser) => Promise<User>
  findByEmail: (email: string) => Promise<User>
  findByPk: (id: string) => Promise<User>
}
