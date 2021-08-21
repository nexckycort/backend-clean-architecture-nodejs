import { Router } from 'express'

import { loginRoutes } from 'infrastructure/entry-points/api/v1/login'
import { signupRoutes } from 'infrastructure/entry-points/api/v1/signup'
import { validateTokenRoutes } from 'infrastructure/entry-points/api/v1/validate-token'

export const routerV1 = Router({ caseSensitive: true })

routerV1.use('/login', loginRoutes)
routerV1.use('/signup', signupRoutes)
routerV1.use('/validate-token', validateTokenRoutes)
