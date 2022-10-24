import { loginTemplate } from "../templates/loginTemplate.js"
import { login } from "../api/users.js";
import { notify } from "../notify.js";


export function loginView(ctx) {
  ctx.render(loginTemplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const email = formData.get("email").trim();
    const password = formData.get("password").trim();

    if (email == "" || password == "") {
      return notify("All fields are required");
    }

    await login(email, password);
    ctx.page.redirect("/");
  }
}
