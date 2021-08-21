export class MissingParamError extends Error {
  private readonly statusCode: string
  constructor(paramName: string) {
    super()
    this.statusCode = '4000'
    this.message = `Missing param: ${paramName}`
  }
}
