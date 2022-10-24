import { register } from "../api/users.js";
import { notify } from "../notify.js";
import { registerTemplate } from "../templates/registerTemplate.js";
import { uploadFile } from "../utils.js"

export function registerView(ctx) {
  ctx.render(registerTemplate(onSubmit, uploadFile));

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const username = formData.get("username").trim();
    const email = formData.get("email").trim();
    const password = formData.get("password").trim();
    const repass = formData.get("repeatPass").trim();
    const gender = formData.get("gender");
    const agree = formData.get("agree-check");
    const image = sessionStorage.getItem("image");

    sessionStorage.removeItem("image");

    if (username == "" || email == "" || password == "" || agree == null) {
      return notify("All fields except profile image are required");
    }
    if (password != repass) {
      return notify("Passwords don't match");
    }

    await register(username, email, password, gender, image);
    
    event.target.reset();
    ctx.page.redirect("/profile/" + sessionStorage.id);
  }
}
