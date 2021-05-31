import { Controller, HttpRequest, HttpResponse } from "../protocols";

export class LoginUserController implements Controller {
  public async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    return new Promise((resolve) => resolve({
      statusCode: 200,
      body: {},
    }) );
  }
}