export class ServerError extends Error {
  private readonly statusCode: string
  constructor(stack: string) {
    super()
    this.statusCode = '5000'
    this.message = 'Error Internal the Server'
  }
}
