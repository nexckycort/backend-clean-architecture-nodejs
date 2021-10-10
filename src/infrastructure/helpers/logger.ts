import { environment } from 'app/config/environment'

export const Logger = {
  info: (...args: unknown[]): void => {
    if (environment === 'development') {
      args.forEach((arg) => {
        console.info(arg)
      })
    }
  },
  debug: (...args: unknown[]): void => {
    if (environment === 'development') {
      args.forEach((arg) => {
        console.debug(arg)
      })
    }
  },
  error: (msg: string, e: Error | unknown | string = ''): void => {
    if (environment === 'development') console.error(`⚠️  ${msg} ⚠️ `, e)
  }
}
