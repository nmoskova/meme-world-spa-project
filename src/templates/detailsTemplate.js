import { html } from "../lib.js";

export const detailsTemplate = (
  meme,
  likes,
  isOwner,
  onDelete,
  onLike,
  onUnlike,
  isLiked
) =>
  html` <div class="card mb-3 center" style="max-width: 800px;">
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
        ${isOwner
          ? editDeleteBttns(meme, onDelete)
          : isLiked
          ? unlikeBttn(likes, onUnlike)
          : likeBttn(likes, onLike)}
      </p>
    </div>
  </div>`;

const editDeleteBttns = (meme, onDelete) =>
  html`<a
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
    </button>`;
    
const likeBttn = (likes, onLike) =>
  html`<button @click=${onLike}
           style="margin-top: 10px; margin-left:10px" class="btn btn-light">
            Like me &#10084
          </button>
          <span>Likes: ${likes.length}</span>`;

const unlikeBttn = (likes, onUnlike) =>
  html`<button
      @click=${onUnlike}
      style="margin-top: 10px; margin-left:10px"
      class="btn btn-light"
    >
      Unlike me &#128148;
    </button>
    <span>Likes: ${likes.length}</span>`;
