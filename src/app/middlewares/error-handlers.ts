import { NextFunction, Request, Response } from 'express'

import { BadRequestError, PayloadTooLargeError } from 'infrastructure/entry-points/api/helpers/error-handler'
import { ERROR_HANDLERS } from 'infrastructure/entry-points/api/interfaces/error-handler'
import { Logger } from 'infrastructure/helpers/logger'

export const errorHandlers = (err: any, _req: Request, res: Response, next: NextFunction): void => {
  if (err !== undefined) {
    switch (err.type) {
      case ERROR_HANDLERS.SYNTAX_ERROR:
        BadRequestError(res, 'SyntaxError')
        break
      case ERROR_HANDLERS.PAYLOAD_TOO_LARGE:
        PayloadTooLargeError(res)
        break
      default:
        BadRequestError(res)
        Logger.error('error handlers', err)
        break
    }
    return
  }
  next()
}
