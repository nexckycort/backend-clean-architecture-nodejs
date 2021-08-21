import { Request, Response } from 'express'

import { NotFoundError } from 'infrastructure/entry-points/api/helpers/error-handler'

export const notFound = (_req: Request, res: Response): Response => NotFoundError(res)
