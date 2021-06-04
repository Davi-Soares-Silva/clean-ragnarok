import { AuthenticationToken } from "@/domain/usecases/authentication-token";
import { ok, forbidden } from "../../utils/response";
import { HttpResponse, Middleware } from "../protocols";

export class AuthMiddleware implements Middleware {
  constructor(private readonly authenticationToken: AuthenticationToken) {}
  async handle(httpRequest: AuthMiddleware.Request): Promise<HttpResponse> {
    try {
      const { accessToken } = httpRequest;

      const user = await this.authenticationToken.auth({ accessToken });

      return ok('Usuário autorizado', user);
    } catch (error) {
      console.log(error);
      return forbidden(error);
    } 
  }
}

export namespace AuthMiddleware {
  export type Request = {
    accessToken: string;
  }
}