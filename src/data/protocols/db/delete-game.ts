export interface DeleteGameRepository {
  delete(id: DeleteGameRepository.Params): DeleteGameRepository.Result;
}

export namespace DeleteGameRepository {
  export type Params = number;

  export type Result = Promise<void>
}