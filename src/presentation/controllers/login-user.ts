import { Authentication } from "@/domain/usecases/authentication";
import { notFound, ok, serverError } from "../..//utils/response";
import { Controller, HttpRequest, HttpResponse } from "../protocols";
import { makeError } from '../../utils'

export class LoginUserController implements Controller {
  constructor(private readonly authentication: Authentication) {}

  public async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = await this.authentication.auth(httpRequest.body);

      return ok('Usuário autenticado com sucesso!', user);
    } catch(error) {
      switch(error.message){
        case 'USER_NOT_FOUND':
          return notFound(
            'Usuário não encontrado.',
            makeError('email', 'Nenhum usuário corresponde ao email fornecido.')
          )
        case 'WRONG_PASSWORD':
          return notFound(
            'Usuário não encontrado',
            makeError('password', 'A senha está incorreta.')
          )
      }
      return serverError(error);
    }

  }
}