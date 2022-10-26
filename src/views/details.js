import { getLike, getMemeLikes, likeMeme, unlikeMeme } from "../api/likes.js";
import { deleteMeme, getMemeById } from "../api/memes.js";
import { getUserData } from "../utils.js";
import { detailsTemplate } from "../templates/detailsTemplate.js"
import { createComment, getMemeComments } from "../api/comments.js";
import { notify } from "../notify.js";

export async function detailsView(ctx) {
  const memeId = ctx.params.id;
  const meme = await getMemeById(ctx.params.id);

  const [likes, comments] = await Promise.all([
    getMemeLikes(meme._id),
    getMemeComments(meme._id),
  ]);

  const userData = getUserData();

  const isOwner = userData?.id == meme._ownerId;
  const isLiked = likes.some((x) => x._ownerId == userData?.id);

  ctx.render(
    detailsTemplate(
      meme, 
      likes, 
      comments, 
      userData,
      isOwner, 
      onSubmit,
      onDelete, 
      onLike, 
      onUnlike, 
      isLiked)
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

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const comment = formData.get("comment").trim();
    const username = formData.get("username");

    if (username == "anonymous") {
      return notify("Please login to post a comment")
    } else if (comment == ""){
      return notify("Please add comment")
    }

    await createComment({memeId, comment, username})
    event.target.reset();
    ctx.page.redirect("/details/" + memeId);
  }
}
