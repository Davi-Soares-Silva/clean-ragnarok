import { CreateGame } from '../../domain/usecases/create-game';
import { AddGameRepository } from '../protocols/db/add-game-repository';

export class DbCreateGame implements CreateGame {
  constructor (
    private readonly addGameRepository: AddGameRepository
  ) {}
  
  public async create({
    name,
    description,
    price,
    platformId,
    imageUrl,
  }: CreateGame.Params): CreateGame.Result {
    const game = await this.addGameRepository.add({
      name,
      description,
      price,
      platformId,
      imageUrl
    })

    if(!game) throw new Error('ERROR_CREATING_GAME');

    return game;
  }

}