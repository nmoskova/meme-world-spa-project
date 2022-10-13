import { getAllGenres } from "../api/genres.js";
import { html } from "../lib.js";

const genresTemplate = (genres) => html`
  <h1>All Genres</h1>
  <div class="genres-list">${genres.map((x) => cardTemplate(x))}</div>
`;

const cardTemplate = (genre) => html`
  <div class="card text-center" style="width: 350px;">
    <div class="card-body">
      <h5 class="card-title">${genre.title}</h5>
      <img
        class="card-img-top"
        style="width: 300px; height:300px"
        img
        src="${genre.imageUrl}"
        alt="${genre.title}"
      />
      <a href="/genres/${genre.title}"  class="btn btn-primary">See all ${genre.title} memes</a>
    </div>
  </div>
`;

export async function genresView(ctx) {
  const genres = await getAllGenres();
  ctx.render(genresTemplate(genres));
}
