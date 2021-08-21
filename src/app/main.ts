import { name, port } from './config/environment'
import { loaders } from 'app/loaders'

async function main(): Promise<void> {
  await loaders()
  const app = (await import('./config/app')).default
  app.set('port', port)

  app
    .listen(port, () => {
      console.info(`########################################################
🛡️  Server ${name} listening on port: ${port} 🛡️
########################################################`)
    })
    .on('error', (e) => console.error('error in server.listen ', e))
}

main().catch(console.error)
