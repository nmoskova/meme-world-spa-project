import { getMemeById, updateMeme } from "../api/memes.js";
import { html } from "../lib.js";
import { notify } from "../notify.js";

const editTemplate = (onSubmit, meme) => html`
  <form @submit=${onSubmit} id="edit-form">
  <div class="form-group form-padding"></div>
    <h1>Edit Meme</h1>
      <label for="genre">Genre</label>
      <input
        class="form-control"
        id="title"
        type="text"
        placeholder=${meme.genre}
        name="genre"
        .value=${meme.genre}
      />
      <label for="description">Description</label>
      <textarea
      class="form-control"
        id="description"
        placeholder="Enter Description"
        name="description"
        .value=${meme.description}
      >
      </textarea>
      <label for="imageUrl">Image Url</label>
      <input
      class="form-control"
        id="imageUrl"
        type="text"
        placeholder="Enter Meme ImageUrl"
        name="imageUrl"
        .value=${meme.imageUrl}
      />
      <p></p>
      <input type="submit" class="btn btn-primary" value="Edit Meme" />
    </div>
  </form>
`;

export async function editView(ctx) {
  const meme = await getMemeById(ctx.params.id);
  ctx.render(editTemplate(onSubmit, meme));

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const genre = formData.get("genre").trim();
    const description = formData.get("description").trim();
    const imageUrl = formData.get("imageUrl").trim();

    if (genre == "" || imageUrl == "") {
      return notify("All fields are required");
    }

    await updateMeme(ctx.params.id, { genre, description, imageUrl });
    event.target.reset();
    ctx.page.redirect("/memes/" + ctx.params.id);
  }
}
