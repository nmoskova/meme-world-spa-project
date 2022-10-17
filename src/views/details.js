import { deleteMeme, getMemeById } from "../api/memes.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";
import { getLikesCount } from "../api/likes.js";

const detailsTemplate = (meme, isOwner, onDelete, onLike) =>
  html` <div
  class="card mb-3 center"
  style="max-width: 800px;"
>
  <div class="row g-0">
    <div class="col-md-4">
      <img
        src="${meme.imageUrl}"
        class="img-fluid rounded-start"
        style="margin-top:15px; margin-left:15px"
        alt="${meme.genre}"
      />
    </div>
    <div class="col-md-8">
    <div class="card-body">
      <h2>${meme.genre}</h2>
    </div>
  </div>
  <p>
  ${
    !isOwner
      ? html`<button @click=${onLike}
         style="margin-top: 10px; margin-left:10px" class="btn btn-light">
          &#10084
        </button>
        <span> Likes: ${meme.likes}</span>`
      : ""
  }
         
          ${
            isOwner
              ? html`<a
                    class="btn btn-primary active"
                    href="/edit/${meme._id}"
                    style="margin-top:15px; margin-left:15px"
                    role="button"
                    aria-pressed="true"
                    >Edit</a
                  >
                  <button
                    class="btn btn-secondary active"
                    type="button"
                    style="margin-top:15px; margin-left:auto"
                    @click=${onDelete}
                    aria-pressed="true"
                  >
                    Delete
                  </button>`
              : ""
          }

</div>
  </p>
  <p></p>
</div>`;

export async function detailsView(ctx) {
  const meme = await getMemeById(ctx.params.id);

  const userData = getUserData();
  const isOwner = userData?.id == meme._ownerId;
  ctx.render(detailsTemplate(meme, isOwner, onDelete, onLike));

  function onLike(meme) {
    
    console.log("like it");
  }

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this meme?");
    if (choice) {
      await deleteMeme(ctx.params.id);
      ctx.page.redirect("/");
    }
  }
}
