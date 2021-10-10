import { Write } from 'infrastructure/repositories/base/interfaces/write'
import { Read } from 'infrastructure/repositories/base/interfaces/read'

export abstract class BaseRepository<T> implements Write<T>, Read<T> {
  async create(item: T): Promise<T> {
    throw new Error('method not implemented')
  }

  async update(filter: any, item: T): Promise<T> {
    throw new Error('method not implemented')
  }

  async delete(filter: any): Promise<boolean> {
    throw new Error('method not implemented')
  }

  async find(item: any): Promise<T[]> {
    throw new Error('method not implemented')
  }

  async findOne(item: any): Promise<T> {
    throw new Error('method not implemented')
  }

  async findByPk(id: string): Promise<T> {
    throw new Error('method not implemented')
  }
}
