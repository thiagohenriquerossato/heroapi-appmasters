import { Request, Response } from "express";

import { SearchAttributeUseCase } from "./SearchAttributeUseCase";

class SearchAttributeController {
  constructor(private searchAttributeUseCase: SearchAttributeUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const [attribute] = Object.getOwnPropertyNames(request.query);
    const [content] = Object.values(request.query);
    const { casesensitive } = request.headers;
    try {
      const heroesList = await this.searchAttributeUseCase.execute(
        attribute,
        content as string,
        casesensitive as string
      );
      return response.json(heroesList);
    } catch (err) {
      if (err.message === "Heroes not found with this search term") {
        return response.status(204).send();
      }
      return response.status(400).send({ message: err.message });
    }
  }
}

export { SearchAttributeController };
