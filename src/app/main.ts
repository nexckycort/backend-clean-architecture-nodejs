import { name, port } from './config/environment'

async function main(): Promise<void> {
  const app = (await import('./config/app')).default
  await app.listen(port)
  console.info(`########################################################
  🛡️  Server ${name} listening on port: ${port} 🛡️
########################################################`)
}

main().catch(console.error)
