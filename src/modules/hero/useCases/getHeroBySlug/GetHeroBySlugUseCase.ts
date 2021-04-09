import { Hero } from "../../model/Hero";
import { HeroesRepository } from "../../repositories/implementations/HeroesRepository";

class GetHeroBySlugUseCase {
  constructor(private heroesRepository: HeroesRepository) {}

  async execute(slug: string): Promise<Hero> {
    const hero = await this.heroesRepository.getBySlug(slug);
    return hero;
  }
}

export { GetHeroBySlugUseCase };
