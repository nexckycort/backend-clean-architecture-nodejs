import express from 'express'

import setupSwagger from 'app/config/config-swagger'
import { middlewares } from 'app/config/middlewares'
import routes from 'app/config/routes'

const app = express()
setupSwagger(app)
middlewares(app)
routes(app)

export default app
