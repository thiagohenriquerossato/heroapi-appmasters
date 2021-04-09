import { Hero } from "../../model/Hero";
import { HeroesRepository } from "../../repositories/implementations/HeroesRepository";

class SearchAttributeUseCase {
  constructor(private heroesRepository: HeroesRepository) {}

  async execute(
    attribute: string,
    content: string,
    caseSensitive = "false"
  ): Promise<Hero[]> {
    const heroesList = await this.heroesRepository.searchByAttribute(
      attribute,
      content,
      caseSensitive
    );
    return heroesList;
  }
}

export { SearchAttributeUseCase };
