import { Express, Request, Response } from 'express'

import { errorHandlers, notFound } from 'app/middlewares'
import { api } from 'app/config/environment'
import { routerV1 } from 'infrastructure/entry-points/api/v1'

export default (app: Express): void => {
  // validate status
  app.get('/status', (_req: Request, res: Response) => {
    res.status(200).end()
  })

  // Load API route
  app.use(api.prefixV1, routerV1)
  /* readdirSync(join(__dirname, '..', 'routes')).map(async (file) => {
    if (!file.includes('.test.')) {
      ;(await import(`../routes/${file}`)).default(router)
    }
  }) */

  app.use(notFound)
  app.use(errorHandlers)
}
