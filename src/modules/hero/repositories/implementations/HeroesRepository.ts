import { api } from "../../../../api";
import { Hero } from "../../model/Hero";
import { IHeroesRepository } from "../IHeroesRepository";

class HeroesRepository implements IHeroesRepository {
  private heroes: Hero[];
  private static INSTANCE: HeroesRepository;

  constructor() {
    this.heroes = [];
  }
  public static getInstance(): HeroesRepository {
    if (!HeroesRepository.INSTANCE) {
      HeroesRepository.INSTANCE = new HeroesRepository();
    }
    return HeroesRepository.INSTANCE;
  }

  async searchByAttribute(
    attribute: string,
    content: string,
    caseSensitive: string
  ): Promise<Hero[]> {
    if (this.heroes.length < 1) {
      try {
        const { data } = await api.get<Hero[]>("/all.json");

        data.forEach((hero) => this.heroes.push(hero));
      } catch {
        throw new Error("Heros API is not accessible");
      }
    }
    if (attribute.length < 3) {
      throw new Error("Attribute has less than 3 characters");
    }

    if (!(attribute in this.heroes[0])) {
      if (attribute in this.heroes[0].powerstats) {
        return this.filterByAttribute(
          attribute,
          "powerstats",
          content,
          caseSensitive
        );
      }
      if (attribute in this.heroes[0].appearance) {
        return this.filterByAttribute(
          attribute,
          "appearance",
          content,
          caseSensitive
        );
      }
      if (attribute in this.heroes[0].biography) {
        return this.filterByAttribute(
          attribute,
          "biography",
          content,
          caseSensitive
        );
      }
      if (attribute in this.heroes[0].work) {
        return this.filterByAttribute(
          attribute,
          "work",
          content,
          caseSensitive
        );
      }
      if (attribute in this.heroes[0].connections) {
        return this.filterByAttribute(
          attribute,
          "connections",
          content,
          caseSensitive
        );
      }
      throw new Error("Attribute does not exists on heroes");
    }
    if (caseSensitive === "true") {
      const heroesList = this.heroes.filter((hero) => {
        return hero[attribute] === content;
      });

      return heroesList;
    }

    const heroesList = this.heroes.filter((hero) => {
      return hero[attribute].toLowerCase() === content.toLowerCase();
    });

    return heroesList;
  }
  async getBySlug(slug: string): Promise<Hero> {
    if (this.heroes.length < 1) {
      try {
        const { data } = await api.get<Hero[]>("/all.json");

        data.forEach((hero) => this.heroes.push(hero));
      } catch {
        throw new Error("Heros API is not accessible");
      }
    }
    const hero = this.heroes.find(
      (hero) => hero.slug.toLowerCase() === slug.toLowerCase()
    );
    if (!hero) {
      throw new Error("Hero does not exists!");
    }
    return hero;
  }

  filterByAttribute(
    attribute: string,
    Property: string,
    content: string,
    caseSensitive: string
  ): Hero[] {
    if (caseSensitive === "true") {
      const heroesList = this.heroes.filter((hero) => {
        if (hero[Property][attribute].includes(content)) {
          return hero;
        }
        return false;
      });
      if (heroesList.length < 1) {
        throw new Error("Heroes not found with this search term");
      }
      return heroesList;
    }
    const heroesList = this.heroes.filter((hero) => {
      if (hero[Property][attribute].includes(content)) {
        return hero;
      }
      if (Array.isArray(hero[Property][attribute])) {
        if (
          hero[Property][attribute].findIndex(
            (item) => content.toLowerCase() === item.toLowerCase()
          ) > 0
        ) {
          return hero;
        }
      }
      return false;
    });
    if (heroesList.length < 1) {
      throw new Error("Heroes not found with this search term");
    }
    return heroesList;
  }
}

export { HeroesRepository };
