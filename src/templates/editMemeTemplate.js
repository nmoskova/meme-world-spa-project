import { html } from "../lib.js";

export const editMemeTemplate = (onSubmit, meme, genres) => html`
<form @submit=${onSubmit} id="edit-form">
<h1>Edit Meme</h1>
  <div class="form-group form-padding" style="line-height:2;">
  </div>
  <label class="mr-sm-2" for="inlineFormCustomSelect">Genres&nbsp;&nbsp;</label>
    <select class="custom-select mr-sm-2" id="title" name="genre" >
      <option selected disabled>Choose genre</option>
      ${genres.map((g) => html`<option value="${g.title}">${g.title}</option>`)}
    </select>
    </div>
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
