import { createMeme } from "../api/memes.js";
import { getGenreTitles } from "../api/genres.js";
import { html } from "../lib.js";
import { notify } from "../notify.js";


const createTemplate = (onSubmit, genres) => html`
  <form id="create-form" @submit=${onSubmit}>
    <h1>Create Meme</h1>
    <div class="form-group form-padding" style="line-height:2;">
      <div>
        <label class="mr-sm-2" for="inlineFormCustomSelect"
          >Genres&nbsp;&nbsp;</label
        >
        <select class="custom-select mr-sm-2" id="select" name="genre">
          ${genres.map(
            (g) => html`<option value="${g.title}">${g.title}</option>`
          )}
        </select> 
        <a href="/create/genre"  style="margin-top: 10px;">Add new Genre</a>
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

export async function createMemeView(ctx) {
  const genres = await getGenreTitles();

  ctx.render(createTemplate(onSubmit, genres));

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const genre = document.forms["create-form"].select.value;
    const description = formData.get("description").trim();
    const imageUrl = formData.get("imageUrl").trim();

    if (genre == "" || imageUrl == "") {
      return notify("Genre and Meme Image fields are required");
    }

    await createMeme({ genre, description, imageUrl });
    event.target.reset();
    ctx.page.redirect("/");
  }
}
