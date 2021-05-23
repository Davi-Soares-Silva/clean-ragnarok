import { MissingParamError } from '../errors/missing-param-error'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { badRequest } from '../helpers/bad-request'

export class CreateGameController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }

    if (!httpRequest.body.price) {
      return badRequest(new MissingParamError('price'))
    }

    return {
      statusCode: 200,
      body: null
    }
  }
}
