import { mysql } from '../infra/db/mysql/helpers/connection';
import { SERVER } from '../utils/constants';
import { server } from './application';

(async () => {
  try {
    await mysql.raw('SELECT 1');
    server.listen(SERVER.PORT, async () => {
      console.log(`Server is running on port: ${SERVER.PORT}`);
      console.log('Database is running!');
    })
  } catch (error) {
    console.log(error);
  }
})();
