import { getGenreTitles } from "../api/genres.js";
import { getMemeById, updateMeme } from "../api/memes.js";
import { notify } from "../notify.js";
import { editMemeTemplate } from "../templates/editMemeTemplate.js";

export async function editMemeView(ctx) {
  const [meme, genres] = await Promise.all([
    getMemeById(ctx.params.id),
    getGenreTitles(),
  ]);
  ctx.render(editMemeTemplate(onSubmit, meme, genres));

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const genre = formData.get("genre");
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
