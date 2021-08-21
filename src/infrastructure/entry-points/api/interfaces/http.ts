export interface HttpRequest {
  body?: any
  headers?: any
  params?: any
  query?: any
}

export interface HttpResponse {
  statusCode: number
  body: any
}
