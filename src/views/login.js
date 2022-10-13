import { html } from "../lib.js";
import { login } from "../api/users.js";
import { notify } from "../notify.js";

const loginTemplate = (onSubmit) => html`
  <form @submit=${onSubmit}>
    <h1>Login</h1>
    <div style="line-height:2;" class="form-group form-padding">
      <label for="email">Email</label>
      <input
        class="form-control"
        id="email"
        placeholder="Enter Email"
        name="email"
        type="email"
      />
      <label for="password">Password</label>
      <input
        class="form-control"
        id="password"
        type="password"
        placeholder="Enter Password"
        name="password"
      />
      <p>Don't have an account?&nbsp;<a href="/register">Register</a></p>
      <button type="submit" class="btn btn-primary">Login</button>
    </div>
  </form>
`;

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
