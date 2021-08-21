import { Response } from 'express'

export const BadRequestError = (res: Response, message: string = 'bad request'): Response => {
  return res.status(400).json({
    statusCode: '4000',
    message
  })
}

export const NotFoundError = (res: Response): Response => {
  return res.status(404).json({
    statusCode: '4004',
    message: 'not found'
  })
}

export const PayloadTooLargeError = (res: Response, message: string = 'payload too large'): Response => {
  return res.status(415).json({
    statusCode: '4000',
    message
  })
}
