import { createGenre } from "../api/genres.js";
import { notify } from "../notify.js";
import { createGenreTemplate } from "../templates/createGenreTemplate.js";

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
