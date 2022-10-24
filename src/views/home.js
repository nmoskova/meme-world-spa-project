import { getAllMemes } from "../api/memes.js";
import { catalogTemplate } from "../templates/homeTemplate.js";

export async function homeView(ctx) {
  const memes = await getAllMemes();

  ctx.render(catalogTemplate(memes));
}
