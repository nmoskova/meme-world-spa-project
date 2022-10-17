import { createGenre } from "../api/genres.js";
import { html } from "../lib.js";
import { notify } from "../notify.js";

const createGenreTemplate = (onSubmit) => html`
  <form @submit=${onSubmit}>
    <h1>Create Genre</h1>
    <div class="form-group form-padding" style="line-height:2;">
      <label for="genre">Genre</label>
      <input
        type="text"
        id="genre"
        placeholder="Enter new genre"
        name="genre"
      />
      <label for="imageUrl">Genre Image</label>
      <input
        id="imageUrl"
        type="text"
        placeholder="Enter ImageUrl"
        name="imageUrl"
      />
      <p></p>
      <button type="submit" class="btn btn-primary">Create Genre</button>
    </div>
  </form>
`;

export async function createGenreView(ctx) {
  ctx.render(createGenreTemplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const title = formData.get("genre").trim();
    const imageUrl = formData.get("imageUrl").trim();

    if (title == "" || imageUrl == "") {
      return notify("Genre and  Image fields are required");
    }

    await createGenre({ title, imageUrl });
    event.target.reset();
    ctx.page.redirect("/create");
  }
}
