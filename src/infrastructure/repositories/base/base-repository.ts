import { Collection } from 'mongodb'

import { Write } from 'infrastructure/repositories/interfaces/write'
import { Read } from 'infrastructure/repositories/interfaces/read'

import { MongoHelper } from 'infrastructure/driven-adapters/adapters/mongo-adapter/mongo-helper'

export abstract class BaseRepository<T> implements Write<T>, Read<T> {
  public readonly collection: Collection

  constructor(collectionName: string, db = MongoHelper.connection()) {
    this.collection = db.collection(collectionName)
  }

  async create(item: T): Promise<T> {
    const insertIdDocument = await this.collection.insertOne(item)
    Object.assign(item, {
      _id: insertIdDocument.insertedId.toHexString()
    })
    return item
  }

  async update(filter: any, item: T): Promise<T> {
    const updateDoc = {
      $set: item
    }
    const document = await this.collection.findOneAndUpdate(filter, updateDoc)
    return document.value as unknown as T
  }

  async delete(filter: any): Promise<boolean> {
    const document = await this.collection.deleteOne(filter)
    return document.deletedCount === 1
  }

  async find(data: any): Promise<T[]> {
    const document = await this.collection.find(data)
    return document as unknown as T[]
  }

  async findOne(data: any): Promise<T> {
    const document = await this.collection.findOne(data)
    return document as unknown as T
  }

  async findByPk(id: string): Promise<T> {
    const document = await this.collection.findOne({ _id: id })
    return document as unknown as T
  }
}
