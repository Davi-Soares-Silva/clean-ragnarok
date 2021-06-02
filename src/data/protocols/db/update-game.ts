export interface UpdateGameRepository {
  update(data: UpdateGameRepository.Params): UpdateGameRepository.Result;
}

export namespace UpdateGameRepository {
  export type Params = {
    id: number,
    game: {
      name?: string;
      description?: string;
      price?: number;
      imageUrl?: string;
      platformId?: number;
    }
  };

  export type Result = Promise<void>;
}