import { getMemesByUser } from "../api/memes.js";
import { notify } from "../notify.js";
import { profileTemplate } from "../templates/profileTemplate.js";
import { getUserData } from "../utils.js";

export async function profileView(ctx) {
  const userData = getUserData();
  const memes = await getMemesByUser(userData.id);
  
  ctx.render(profileTemplate(memes, userData));

}
