import { getAllGenres } from "../api/genres.js";
import { genresTemplate } from "../templates/genresTemplate.js";

export async function genresView(ctx) {
  const genres = await getAllGenres();
  
  ctx.render(genresTemplate(genres));
}
