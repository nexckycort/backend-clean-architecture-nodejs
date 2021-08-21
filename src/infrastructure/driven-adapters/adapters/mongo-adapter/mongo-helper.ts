import { Db, MongoClient } from 'mongodb'

import { Logger } from 'infrastructure/helpers/logger'

let client!: MongoClient
let db!: Db

export const MongoHelper = {
  async connect(uri: string, dbName: string): Promise<void> {
    client = new MongoClient(uri)
    await client.connect()
    db = client.db(dbName)
    Logger.info('MongoDB loaded and connected! ✌️')
  },

  connection: () => db,

  async disconnect(): Promise<void> {
    await client.close()
    Logger.info('MongoDB disconnected')
  }
}
