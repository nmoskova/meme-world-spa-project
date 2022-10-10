import { getAllGenres } from "../api/genres.js";
import { html } from "../lib.js";

const genresTemplate = (genres) => html`
<section id="meme-feed">
    <h1>All Genres</h1>
    ${genres.map((x) => cardTemplate(x))} 
</section>
`;

const cardTemplate = (genre) => html`
<div class="card"> 
<div class="card-body"> 
<button type="button" class="btn btn-link">${genre.title}</button>
  
      <img src="${genre.imageUrl}" alt="${genre.title}">    
      </div>
      </div>
`;

export async function genresView(ctx) {
  const genres = await getAllGenres();
  ctx.render(genresTemplate(genres));
}
