import { html } from "../lib.js";

export const createMemeTemplate = (onSubmit, genres) => html`
  <form @submit=${onSubmit} id="create-form">
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
        <a href="/create/genre" style="margin-top: 10px;">Add new Genre</a>
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
