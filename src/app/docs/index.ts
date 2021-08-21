import { api } from 'app/config/environment'
import { serverError, badRequest, unauthorized } from './components'
import { signupParamsSchema } from './schemas/signup/signup-params-schema'
import { signupSchema } from './schemas/signup/signup-schema'
import { errorSchema } from './schemas/login/error-schema'
import { signupPath } from './signup-path'

export default {
  openapi: '3.0.0',
  info: {
    title: 'API Node With Clean Architecture',
    description: 'API - Nestor Cortina',
    version: '1.0.0'
  },
  servers: [
    {
      url: api.prefixV1
    }
  ],
  tags: [
    {
      name: 'Login'
    }
  ],
  paths: {
    '/signup': signupPath // route
  },
  schemas: {
    signup: signupSchema, // response
    signupParams: signupParamsSchema, // request

    error: errorSchema
  },
  components: {
    badRequest,
    serverError,
    unauthorized
  }
}
