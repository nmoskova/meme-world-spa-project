import { html } from "../lib.js";

export const memeCard = (meme) => html`
  <div class="card center" style="min-width:300px; margin:auto;">
      <div class="meme-card" >
        <h2 style="text-align:center;">${meme.genre}</h2>
      </div>
      <div>
        <img
          src="${meme.imageUrl}"
          class="img-fluid rounded-start center"
          alt="${meme.genre}"
        />
      </div>
    <p style="text-align: center;">
      <a
        href="/details/${meme._id}"
        style="margin-top: 10px"
        class="btn btn-primary"
      >
        Details
      </a>
    </p>
    <p></p>
  </div>
`;
