import { UserRepository } from 'infrastructure/repositories/user-repository'
import { RijndaelAdapter } from 'domain/interfaces/rijndael'
import { User, NewUser } from 'domain/models/user-model'
import { IUserService } from './interfaces/user'

export class UserService implements IUserService {
  constructor(private readonly rijndaelAdapter: RijndaelAdapter, private readonly userRepository: UserRepository) {}

  async create(newUser: NewUser): Promise<User> {
    const { name, password, email, role } = newUser
    const passwordHash = await this.rijndaelAdapter.encrypt(password)
    const user = new User(name, passwordHash, email, role, this.rijndaelAdapter.saltText)
    const userRecord = await this.userRepository.create(user)
    return userRecord
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findByEmail(email)
  }

  async findByPk(id: string): Promise<User> {
    return await this.userRepository.findByPk(id)
  }
}
