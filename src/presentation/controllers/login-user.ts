import { Authentication } from "@/domain/usecases/authentication";
import { ok, serverError } from "../..//utils/response";
import { Controller, HttpRequest, HttpResponse } from "../protocols";

export class LoginUserController implements Controller {
  constructor(private readonly authentication: Authentication) {}

  public async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = await this.authentication.auth(httpRequest.body);

      return ok('Usuário autenticado com sucesso!', user);
    } catch(error) {
      console.log(error);
      return serverError(error);
    }

  }
}