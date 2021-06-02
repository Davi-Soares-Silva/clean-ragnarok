import { GameModel } from '../../../domain/models/game';

export interface AddGameRepository {
  add(data: AddGameRepository.Params): AddGameRepository.Result
}

export namespace AddGameRepository {
  export type Params = Omit<
    GameModel,
    'gameId' | 'createdAt' | 'updatedAt' | 'deletedAt'
    >;

  export type Result = Promise<GameModel>
}