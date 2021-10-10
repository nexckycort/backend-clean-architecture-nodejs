import { FastifyInstance, HookHandlerDoneFunction } from 'fastify'
import { AdaptRoute } from 'app/adapters/fastify-route-adapter'

import { makeHelloController } from 'app/factories'

export function routesV1(fastify: FastifyInstance, options: { prefix: string }, done: HookHandlerDoneFunction): void {
  fastify.get('/', AdaptRoute(makeHelloController()))
  done()
}
