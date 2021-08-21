import { Router } from 'express'

import { schemaValidateToken } from 'infrastructure/entry-points/api/v1/validate-token'
import validator, { ValidationSource } from 'infrastructure/entry-points/api/middlewares/validator'
import { makeValidateTokenController } from 'app/factories/validate-token'
import { AdaptRoute } from 'app/adapters/express-route-adapter'

export const validateTokenRoutes = Router()

validateTokenRoutes.get('/', validator(schemaValidateToken, ValidationSource.HEADER), AdaptRoute(makeValidateTokenController()))
