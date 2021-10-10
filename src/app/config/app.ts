import Fastify from 'fastify'

import routes from 'app/config/routes'
import { middlewares } from 'app/config/middlewares'

const app = Fastify({
  // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs
  trustProxy: true
})
middlewares(app)
routes(app)

export default app
