import { Router } from 'express';
import { adaptRoute } from '../../adapters/adaptRoute';
import { 
  makeListGamesController,
  makeListGameByIdController,
} from '../../factories/controllers';


export default (routes: Router) => {
  routes
    .route('/games')
    .get(adaptRoute(makeListGamesController()))

  routes
    .route('/games/:id')
    .get(adaptRoute(makeListGameByIdController()))
}
