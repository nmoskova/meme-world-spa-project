import { html } from "../lib.js";

export const detailsTemplate = (
  meme,
  likes,
  comments,
  userData,
  isOwner,
  onSubmit,
  onDelete,
  onLike,
  onUnlike,
  isLiked
) =>
  html` <div class="container">
    <div class="row">
      <div class="col-sm" style="margin-left:10px">
        <h2 >${meme.genre}</h2>
        <img
          src="${meme.imageUrl}"
          class=" img img-fluid rounded-start"
          style="margin-top:15px; "
          alt="${meme.genre}"
        />
        ${
          meme.description
            ? html`<p>Description: <b>${meme.description}</b></p>`
            : ""
        }
        <p>
          ${
            isOwner
              ? editDeleteBttns(meme, onDelete)
              : isLiked
              ? unlikeBttn(likes, onUnlike)
              : likeBttn(likes, onLike)
          }
        </p>
      </div>
      <div class="col-md parent">
        <div class="text-container">
        <h3 style="margin-top: 40px;">Recent comments</h3>
        
          ${
            comments.length != 0
              ? comments.map(
                  (x) =>
                    html`<p class="text"><b>${x.username}</b>: ${x.comment}</p>`
                )
              : html`</p class="text">No comments for this meme yet. <br />
                  Post the first one :)</p>`
          }
          <div style="margin-top:50px">
    <form @submit=${onSubmit}>
  <div class="form-group row">
    <label for="username" class="col-sm-2 col-form-label">Username</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="username" name="username" value="${
        userData ? userData.username : "anonymous"
      }">
    </div>
  </div>
  <div class="form-group row">
    <label for="comment" class="col-sm-2 col-form-label">Comment</label>
    <div class="col-sm-10">
      <input type="text" class="form-control"  maxlength="50" id="comment" name="comment" placeholder="Enter your comment here.">
    </div>
  </div>
    <button type="submit" class="btn btn-primary" style="margin-top:20px;">Post</button>
  </div>
</form>
    </div>
        </div>
      </div>
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
