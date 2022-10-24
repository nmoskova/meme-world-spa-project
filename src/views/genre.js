import { getMemesByGenre } from "../api/memes.js";
import { genreCatalogueTemplate } from "../templates/genreTemplate.js";

export async function genreView(ctx) {
  const memes = await getMemesByGenre(ctx.params.title);
  ctx.render(genreCatalogueTemplate(memes, ctx.params.title));
}

