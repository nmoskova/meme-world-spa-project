import { createMeme } from "../api/memes.js";
import { html } from "../lib.js";
import { notify } from "../notify.js";

const createTemplate = (onSubmit) => html`
  <form @submit=${onSubmit}>
    <h1>Create Meme</h1>
    <div class="form-group form-padding" style="line-height:2;">
    <div>
    <label class="mr-sm-2" for="inlineFormCustomSelect">Genres&nbsp;&nbsp;</label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" >
        <option selected disabled>Choose genre</option>
        <option value="1">One</option>
      </select>
      </div>
      <label for="description">Description</label>
      <textarea
        id="description"
        class="form-control"
        placeholder="Enter Description"
        name="description"
      ></textarea>
      <label for="imageUrl">Meme Image</label>
      <input
        id="imageUrl"
        class="form-control"
        type="text"
        placeholder="Enter ImageUrl"
        name="imageUrl"
      />
      <p></p>
      <button type="submit" class="btn btn-primary">Create Meme</button>
    </div>
  </form>
`;

export function createView(ctx) {
  ctx.render(createTemplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const title = formData.get("title").trim();
    const description = formData.get("description").trim();
    const imageUrl = formData.get("imageUrl").trim();

    if (title == "" || imageUrl == "") {
      return notify("Genre ans Meme Image fields are required");
    }

    await createMeme({ genre, description, imageUrl });
    event.target.reset();
    ctx.page.redirect("/");
  }
}
