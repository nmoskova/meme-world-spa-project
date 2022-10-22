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
  <nav aria-label="Page navigation example"">
  <ul class="pagination justify-content-center">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
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
</div>
`

;

export async function homeView(ctx) {
  const memes = await getAllMemes();

  ctx.render(catalogTemplate(memes));
}
