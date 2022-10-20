import { getMemesByUser } from "../api/memes.js";
import { html } from "../lib.js";
import { notify } from "../notify.js";
import { getUserData } from "../util.js";

const profileTemplate = (memes, userData, onDelete) => html`
  <section id="user-profile-page" class="user-profile">
    <article class="user-info">
      ${userData.image
        ? html`<div>

        <img
        src="${userData.image}"
        class="img-fluid rounded-start"
        alt="image"
      />
      </div>`
        : ""}

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
      ${memes.length == 0
        ? html`<img
            src="../../html/images/no-memes.jpg"
            class="img-fluid rounded mx-auto d-block"
            alt="no-memes-in-database-img"
          />`
        : memes.map(memeCard)}
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

export async function profileView(ctx) {
  const userData = getUserData();
  const memes = await getMemesByUser(userData.id);
  ctx.render(profileTemplate(memes, userData, onDelete));

  function onDelete() {
    notify("Ho-ho-ho!I won't let you leave MEME-WORLD");
  }
}
