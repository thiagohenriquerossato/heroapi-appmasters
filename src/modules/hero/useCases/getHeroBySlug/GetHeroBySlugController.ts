import { Request, Response } from "express";

import { GetHeroBySlugUseCase } from "./GetHeroBySlugUseCase";

class GetHeroBySlugController {
  constructor(private getHeroBySlugUseCase: GetHeroBySlugUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { slug } = request.params;
    try {
      const hero = await this.getHeroBySlugUseCase.execute(slug as string);
      return response.status(200).json(hero);
    } catch (err) {
      return response.status(404).send({ message: err.message });
    }
  }
}

export { GetHeroBySlugController };
