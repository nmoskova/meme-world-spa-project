import { html } from "../lib.js";
import { memeCard } from "./memeCard.js";

export const genreCatalogueTemplate = (memes, title) => html`
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
