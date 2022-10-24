import { getGenreTitles } from "../api/genres.js";
import { createMeme } from "../api/memes.js";
import { notify } from "../notify.js";
import { createMemeTemplate } from "../templates/createMemeTemplate.js";

export async function createMemeView(ctx) {
  const genres = await getGenreTitles();

  ctx.render(createMemeTemplate(onSubmit, genres));

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
