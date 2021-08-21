import { Router } from 'express'

import validator from 'infrastructure/entry-points/api/middlewares/validator'
import { schemaLogin } from 'infrastructure/entry-points/api/v1/login'
import { AdaptRoute } from 'app/adapters/express-route-adapter'
import { makeLoginController } from 'app/factories/login'

export const loginRoutes = Router()

loginRoutes.post('/', validator(schemaLogin), AdaptRoute(makeLoginController()))
