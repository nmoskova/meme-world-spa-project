import { html } from "../lib.js";

export const createGenreTemplate = (onSubmit) => html`
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
