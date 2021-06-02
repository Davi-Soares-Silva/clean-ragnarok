export interface UpdateGame {
  update: (data: UpdateGame.Params) => UpdateGame.Result;
}

export namespace UpdateGame {
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