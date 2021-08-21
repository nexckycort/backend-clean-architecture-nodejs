import { Router } from 'express'

import { AdaptRoute } from 'app/adapters/express-route-adapter'
import { makeSignupController } from 'app/factories/signup'
import validator from 'infrastructure/entry-points/api/middlewares/validator'
import { schemaSignup } from 'infrastructure/entry-points/api/v1/signup'

export const signupRoutes = Router()

signupRoutes.post('/', validator(schemaSignup), AdaptRoute(makeSignupController()))
