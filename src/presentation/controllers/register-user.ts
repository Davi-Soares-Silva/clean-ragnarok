import { RegisterUser } from "../../domain/usecases/register-user";
import { badRequest, conflict, created, serverError } from "../../utils/response";
import { HttpRequest, HttpResponse, Controller } from "../protocols";

export class RegisterUserController implements Controller {
  constructor(
    private readonly registerUser: RegisterUser
  ) {}

  public async handle(httpRequest: HttpRequest): Promise<HttpResponse>{
    try {
      const { name, email, password, userTypeId } = httpRequest.body;

      const user = await this.registerUser.register({
        name,
        email,
        password,
        userTypeId,
      })

      return created('Usuário registrado com sucesso', user);

    } catch (error) {
      switch(error.message) {
        case 'ERROR_CREATING_USER':
          return badRequest(error);
        case 'EMAIL_ALREADY_EXISTS':
          return conflict('Email informado já existe!');
        default:
          return serverError(error);
      }
    }

  }
}