export interface Ok {
  message?: string
  statusCode?: string
  data?: any
}

export const defaultAnswerOk = { message: 'OK', statusCode: '2000' }
