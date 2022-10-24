import { getLike, getMemeLikes, likeMeme, unlikeMeme } from "../api/likes.js";
import { deleteMeme, getMemeById } from "../api/memes.js";
import { getUserData } from "../utils.js";
import { detailsTemplate } from "../templates/detailsTemplate.js"

export async function detailsView(ctx) {
  const meme = await getMemeById(ctx.params.id);
  const likes = await getMemeLikes(meme._id);
  const userData = getUserData();

  const isOwner = userData?.id == meme._ownerId;
  const isLiked = likes.some((x) => x._ownerId == userData.id);

  ctx.render(
    detailsTemplate(meme, likes, isOwner, onDelete, onLike, onUnlike, isLiked)
  );

  async function onLike() {
    await likeMeme(meme._id);
    ctx.page.redirect("/memes/" + meme._id);
  }

  async function onUnlike() {
    let like = await getLike(meme._id, userData.id);
    await unlikeMeme(like[0]._id);
    ctx.page.redirect("/memes/" + meme._id);
  }

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this meme?");
    if (choice) {
      await deleteMeme(ctx.params.id);
      ctx.page.redirect("/");
    }
  }
}
