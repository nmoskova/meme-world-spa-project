import { html } from "../lib.js";

export const genresTemplate = (genres) => html`
  <h1>All Genres</h1>
  <div class="genres-list">${genres.map((x) => memeCard(x))}</div>
`;

const memeCard = (genre) => html`
  <div class="card text-center" style="width: 350px;">
    <div class="card-body">
      <h5 class="card-title">${genre.title}</h5>
      <img
        class="card-img-top"
        style="width: 300px; height:300px"
        src="${genre.imageUrl}"
        alt="${genre.title}"
      />
      <a href="/genres/${genre.title}" class="btn btn-primary">See all ${genre.title} memes</a>
    </div>
  </div>
`;