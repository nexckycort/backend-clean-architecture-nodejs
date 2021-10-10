import { FastifyInstance } from 'fastify'

import { cors, gzip, helmet } from 'app/middlewares'
import { corsUrl } from './environment'

export const middlewares = (app: FastifyInstance): void => {
  // Enable Cross Origin Resource Sharing to all origins by default
  void app.register(cors, {
    origin: corsUrl,
    optionsSuccessStatus: 200
  })
  // Helmet can help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately
  void app.register(helmet)
  // Compress all HTTP responses
  void app.register(gzip)
}
