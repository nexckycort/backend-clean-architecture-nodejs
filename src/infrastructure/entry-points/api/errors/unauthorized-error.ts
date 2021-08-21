export class UnauthorizedError extends Error {
  private readonly statusCode: string
  constructor() {
    super()
    this.statusCode = '4001'
    this.message = 'Incorrect email or password'
  }
}

export class UnauthorizedInvalidTokenError extends Error {
  private readonly statusCode: string
  constructor() {
    super()
    this.statusCode = '4001'
    this.message = 'Invalid Token'
  }
}
