import { HeroesRepository } from "../../repositories/implementations/HeroesRepository";
import { GetHeroBySlugController } from "./GetHeroBySlugController";
import { GetHeroBySlugUseCase } from "./GetHeroBySlugUseCase";

const heroesRepository = HeroesRepository.getInstance();

const getHeroBySlugUseCase = new GetHeroBySlugUseCase(heroesRepository);

const getHeroBySlugController = new GetHeroBySlugController(
  getHeroBySlugUseCase
);

export { getHeroBySlugController };
