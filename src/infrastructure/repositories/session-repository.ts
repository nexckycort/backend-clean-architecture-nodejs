import { BaseRepository } from 'infrastructure/repositories/base/base-repository'
import { Session } from 'domain/models/session-model'

export class SessionRepository extends BaseRepository<Session> {
  constructor() {
    super('sessions')
  }

  async findByUserId(userId: string): Promise<Session> {
    const sessionRecord = await this.findOne({ user_id: userId })
    return sessionRecord
  }

  async findByToken(token: string): Promise<Session> {
    const sessionRecord = await this.findOne({ token })
    return sessionRecord
  }

  async updateByPk(id: string, item: Session): Promise<Session> {
    const sessionRecord = await this.update({ _id: id }, item)
    return sessionRecord
  }
}
