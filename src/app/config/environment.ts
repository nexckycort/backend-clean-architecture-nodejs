// Mapper for environment variables
export const environment = process.env.NODE_ENV ?? 'production'
export const port = process.env.PORT ?? '9000'
export const name = process.env.NAME_API ?? 'API'

export const corsUrl = process.env.CORS_URL ?? '*'

export const api = {
  prefixV1: process.env.PREFIX_API_V1 ?? '/api/v1.0'
}

export const mongo = {
  uri: process.env.MONGO_URI ?? '',
  dbName: process.env.MONGO_DATABASE ?? ''
}

export const emailDomain = process.env.EMAIL_DOMAIN ?? ''

export const rijndaelKey = process.env.RIJNDAEL_KEY ?? ''

export const token = {
  seed: process.env.SEED ?? '',
  expiresIn: +(process.env.EXPIRES_IN ?? 15)
}
