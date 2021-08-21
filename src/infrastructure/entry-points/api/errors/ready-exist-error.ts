export class AlReadyExist extends Error {
  private readonly statusCode: string
  constructor(paramName: string) {
    super()
    this.statusCode = '4000'
    this.message = `This information already exists in our database: ${paramName}`
  }
}

export class NoAlReadyExist extends Error {
  private readonly statusCode: string
  constructor(paramName: string) {
    super()
    this.statusCode = '4004'
    this.message = `This does not exist in our database: ${paramName}`
  }
}
