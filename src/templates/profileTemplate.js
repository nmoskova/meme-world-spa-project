import { html } from "../lib.js";

export const profileTemplate = (memes, userData, onDelete) => html`
  <section id="user-profile-page" class="user-profile">
    <article class="user-info">
      ${userData.image ? userImg(userData.image) : ""}

      <div class="user-content">
        <p>Username: ${userData.username}</p>
        <p>Email: ${userData.email}</p>
        <p>My memes count: ${memes.length}</p>
        <button
          class="btn btn-secondary active"
          type="button"
          style="margin-top:15px; margin-left:auto"
          @click=${onDelete}
          aria-pressed="true"
        >
          Delete
        </button>
      </div>
    </article>
    <h1 style="text-align:center; line-height: 3;">User Memes</h1>
    <div class="user-meme-list">
      ${memes.length == 0 ? noMemesImg : memes.map(memeCard)}
    </div>
  </section>
`;

const memeCard = (meme) => html`
  <div class="card">
    <p class="user-meme-title">${meme.title}</p>
    <img
      class="card-img-top"
      style="width: 300px;"
      src="${meme.imageUrl}"
      alt="meme-image"
    />
    <div class="card-body">
      <h5 class="card-title">${meme.title}</h5>
      <a href="/memes/${meme._id}" class="btn btn-primary">Details</a>
    </div>
  </div>
`;

const noMemesImg = html`<img
  src="../../html/images/no-memes.jpg"
  class="img-fluid rounded mx-auto d-block"
  alt="no-memes-in-database-img"
/>`;

const userImg = (userImg) => html`<div>
  <img src="${userImg}" class="img-fluid rounded-start" alt="image" />
</div>`;
