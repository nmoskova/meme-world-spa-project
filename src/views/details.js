import { deleteMeme, getMemeById } from "../api/memes.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (meme, isOwner, onDelete) => html`
  <h2 style="padding:20px;" class="card-title">${meme.genre}</h2>
  <div class="card" style="width: 18rem;">
    <img src="${meme.imageUrl}" class="card-img-top" alt="${meme.genre}" />
    <div class="card-body">
      <p class="card-text">${meme.description}</p>
      <!--  Like Button should not be displayed only for creator of this meme  -->
      ${!isOwner
        ? html`<button @click=${onDelete} class="button danger">Like</button>`
        : ""}
      <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
      <div>
        ${isOwner
          ? html`<a
                class="btn btn-primary active"
                href="/edit/${meme._id}"
                role="button"
                aria-pressed="true"
                >Edit</a
              >
              <button
                class="btn btn-secondary active"
                type="button"
                @click=${onDelete}
                aria-pressed="true"
              >
                Delete
              </button>`
          : ""}
      </div>
    </div>
  </div>
`;

export async function detailsView(ctx) {
  const meme = await getMemeById(ctx.params.id);

  const userData = getUserData();
  const isOwner = userData?.id == meme._ownerId;
  ctx.render(detailsTemplate(meme, isOwner, onDelete));

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this meme?");
    if (choice) {
      await deleteMeme(ctx.params.id);
      ctx.page.redirect("/");
    }
  }
}
