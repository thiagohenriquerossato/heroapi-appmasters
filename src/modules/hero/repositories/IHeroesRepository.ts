import { Hero } from "../model/Hero";

interface IHeroesRepository {
  searchByAttribute(
    attribute: string,
    content: string,
    caseSensitive: string
  ): Promise<Hero[]>;
  getBySlug(slug: string): Promise<Hero>;
}
export { IHeroesRepository };
