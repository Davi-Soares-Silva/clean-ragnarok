import { HttpRequest, HttpResponse } from '../protocols/http'

export class CreateGameController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name')
      }
    }

    if (!httpRequest.body.price) {
      return {
        statusCode: 400,
        body: new Error('Missing param: price')
      }
    }

    return {
      statusCode: 200,
      body: null
    }
  }
}
