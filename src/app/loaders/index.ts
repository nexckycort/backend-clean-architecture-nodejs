import { MongoHelper } from 'infrastructure/driven-adapters/adapters/mongo-adapter/mongo-helper'
import { Logger } from 'infrastructure/helpers/logger'
import { api, mongo } from 'app/config/environment'

export const loaders = async (): Promise<void> => {
  await MongoHelper.connect(mongo.uri, mongo.dbName)

  Logger.info(`API PREFIX: ${api.prefixV1}`)
}
