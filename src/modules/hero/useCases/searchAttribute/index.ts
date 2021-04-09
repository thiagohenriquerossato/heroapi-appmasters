import { HeroesRepository } from "../../repositories/implementations/HeroesRepository";
import { SearchAttributeController } from "./SearchAttributeController";
import { SearchAttributeUseCase } from "./SearchAttributeUseCase";

const heroesRepository = HeroesRepository.getInstance();

const searchAttributeUseCase = new SearchAttributeUseCase(heroesRepository);

const searchAttributeController = new SearchAttributeController(
  searchAttributeUseCase
);

export { searchAttributeController };
