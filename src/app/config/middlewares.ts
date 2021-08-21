import { Application } from 'express'

import { bodyParser, cors, gzip, helmet } from 'app/middlewares'

export const middlewares = (app: Application): void => {
  app.use(helmet)
  app.use(cors)
  app.use(bodyParser)
  app.use(gzip)
}
