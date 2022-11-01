import { register } from "../api/users.js";
import { notify } from "../notify.js";
import { registerTemplate } from "../templates/registerTemplate.js";
import { uploadFile } from "../utils.js"

export function registerView(ctx) {
  ctx.render(registerTemplate(onSubmit, uploadFile));

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    let username = formData.get("username").trim();
    let email = formData.get("email").trim();
    let password = formData.get("password").trim();
    let repass = formData.get("repeatPass").trim();
    let gender = formData.get("gender");
    let agree = formData.get("agree-check");
    let image = sessionStorage.getItem("image");

    sessionStorage.removeItem("image");

    if (username == "" || email == "" || password == "" || agree == null) {
      return notify("All fields except profile image are required");
    }
    if (password != repass) {
      return notify("Passwords don't match");
    }
    
    if (!image) image = "";

    await register({username, email, password, gender, image});
    
    event.target.reset();
    ctx.page.redirect("/profile/" + sessionStorage.id);
  }
}
