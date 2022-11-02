import { html } from "../lib.js";

export const genresTemplate = (genres) => html`
  <h1>All Genres</h1>
  <div class="genres-list">${genres.map((x) => memeCard(x))}</div>
`;

const memeCard = (genre) => html`
  <div class="card text-center" style="width:300px; margin:auto;">
    <div class="card-body">
      <h5 class="card-title">${genre.title}</h5>
      <img
        class="card-img-top"
        src="${genre.imageUrl}"
        alt="${genre.title}"
      />
      <a href="/genres/${genre.title}" class="btn btn-primary">See all ${genre.title} memes</a>
    </div>
  </div>
`;