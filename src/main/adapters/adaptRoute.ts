import { Request, Response } from 'express';
import { Controller } from '../../presentation/protocols/controller';

import { formateSnakeCaseKeysForCamelCase } from '../../utils/object/formatter';

export function adaptRoute(controller: Controller) {
  return async (req: Request, res: Response) => {
    const httpRequest = {
      body: formateSnakeCaseKeysForCamelCase(req.body),
      params: formateSnakeCaseKeysForCamelCase(req.params),
      query: formateSnakeCaseKeysForCamelCase(req.query),
      headers: req.headers,
    };

    const httpResponse = await controller.handle(httpRequest);

    if(httpResponse.headers) {
      res.set(httpResponse.headers);
    }

    return res
      .status(httpResponse.statusCode)
      .json(httpResponse.body);
  };
}