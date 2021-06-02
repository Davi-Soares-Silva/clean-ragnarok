export class WithResponseError extends Error {
  public response: any;

  constructor(message: string, response: any) {
    super(message);
    this.name = message;
    this.response = response;
  }
}

export const makeResponseError = (message: string, error: any) => {
  throw new WithResponseError(message, error);
};
