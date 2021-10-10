import { defaultAnswerOk, Ok, HttpResponse } from '../interfaces'
import { ServerError } from '../errors'

export const ok = ({ message = 'Ok', statusCode = '2000', data }: Ok = defaultAnswerOk): HttpResponse => ({
  statusCode: 200,
  body: {
    message,
    statusCode,
    data
  }
})

export const badRequest = (error: Error | any): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const unauthorized = (error: Error | any): HttpResponse => ({
  statusCode: 401,
  body: error
})

export const forbidden = (error: Error | any): HttpResponse => ({
  statusCode: 403,
  body: error
})

export const serverError = (error: Error | any): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack as string)
})
