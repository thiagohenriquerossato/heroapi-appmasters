import express from "express";

import { getHeroBySlugController } from "./modules/hero/useCases/getHeroBySlug";
import { searchAttributeController } from "./modules/hero/useCases/searchAttribute";

const app = express();
app.use(express.json());

app.get("/search", (request, response) => {
  searchAttributeController.handle(request, response);
});
app.get("/slug/:slug", (request, response) => {
  getHeroBySlugController.handle(request, response);
});
app.listen(3333, () => console.log("Server is running"));
