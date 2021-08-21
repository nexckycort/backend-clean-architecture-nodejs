import { NextFunction, Request, Response } from 'express'

import { corsUrl } from 'app/config/environment'

export const cors = (req: Request, res: Response, next: NextFunction): void => {
  res.set('access-control-allow-origin', corsUrl)
  res.set('access-control-allow-headers', '*')
  res.set('access-control-allow-methods', '*')
  next()
}
