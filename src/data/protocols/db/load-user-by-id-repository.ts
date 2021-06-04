export interface LoadUserByIdRepository {
  loadById(params: LoadUserByIdRepository.Params): LoadUserByIdRepository.Result;
}

export namespace LoadUserByIdRepository {
  export type Params = number;

  export type Result = Promise<{
    userId: number;
    name: string;
  }>
}