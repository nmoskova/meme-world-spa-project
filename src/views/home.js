import { getMemes, getMemesCount } from "../api/memes.js";
import { catalogTemplate } from "../templates/homeTemplate.js";

export async function homeView(ctx) {
  let params = new URLSearchParams(ctx.querystring);
  const page = Number(params.get("page"));
  const PAGE_SIZE = 4;

  const [memes, memesCount] = await Promise.all([
    getMemes(page, PAGE_SIZE),
    getMemesCount(),
  ]);

  ctx.render(catalogTemplate(memes, page, PAGE_SIZE, memesCount));
}
