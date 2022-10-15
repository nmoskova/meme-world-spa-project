import { getAllMemes } from "../api/memes.js";
import { html } from "../lib.js";

const catalogTemplate = (memes) => html`
  <div>
    <h1>Memes</h1>
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
    <div class="card-body">
      <h2>${meme.genre}</h2>
    </div>
    <div class="col-md-4">
      <img
        src="${meme.imageUrl}"
        class="img-fluid rounded-start"
        alt="${meme.genre}"
      />
    </div>
    <div class="col-md-8" style="text-align: center">
      <h4>Recent comments</h4>
    </div>
  </div>
  <p><a href="/details/${meme._id}" style="margin-left: 10px;" class="btn btn-primary"> Details  </a><p>
</div>`;

export async function homeView(ctx) {
  const memes = await getAllMemes();

  ctx.render(catalogTemplate(memes));
}
