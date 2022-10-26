import { getMemes, getMemesCount } from "../api/memes.js";
import { catalogTemplate } from "../templates/homeTemplate.js";

export async function homeView(ctx) {
  let params = new URLSearchParams(ctx.querystring);
  const page = Number(params.get("page"));

  const [memes, memesCount] = await Promise.all([
    getMemes(page),
    getMemesCount(),
  ]);

  ctx.render(catalogTemplate(memes, page, memesCount));
}
