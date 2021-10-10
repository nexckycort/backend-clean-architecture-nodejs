// Mapper for environment variables
export const environment = (process.env.NODE_ENV ?? 'production') as 'production' | 'development' | 'test'
export const port = process.env.PORT ?? '9000'
export const name = process.env.NAME_API ?? 'API'

export const corsUrl = process.env.CORS_URL ?? '*'

export const api = {
  prefixV1: process.env.PREFIX_API_V1 ?? ''
}
