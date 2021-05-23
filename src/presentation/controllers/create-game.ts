export class CreateGameController {
  handle (httpRequest: any): any {
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
  }
}
