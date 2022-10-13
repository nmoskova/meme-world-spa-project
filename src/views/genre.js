import { getMemesByGenre } from "../api/memes.js";
import { html } from "../lib.js";

export async function genreView(ctx) {
  const memes = await getMemesByGenre(ctx.params.title);
  ctx.render(catalogTemplate(memes, ctx.params.title));
}

const catalogTemplate = (memes, title) => html`
  <div>
    <h1>${title}</h1>
  </div>

  <div>
    ${memes.length == 0
      ? html`<img
          src="../../html/images/no-memes.jpg"
          class="img-fluid rounded mx-auto d-block"
          alt="no-memes-in-database-img"
        />`
      : memes.map((x) => memeCard(x))}
  </div>
`;

const memeCard = (meme) => html` <div
  class="card w-75 center"
  style="max-width: 800px; margin-bottom: 20px"
>
  <div class="row g-0">
    <div class="col-md-4">
      <img
        src="${meme.imageUrl}"
        class="img-fluid rounded-start"
        style="padding-top: 30px; width: 700px"
        alt="${meme.genre}"
      />
    </div>
    <div class="col-md-8" style="text-align: center; padding-top: 30px;">
      <h4>Recent comments</h4>
    </div>
  </div>
  <p>Hello</p>
</div>`;
