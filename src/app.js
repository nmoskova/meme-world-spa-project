import { logout } from "./api/users.js";
import { page, render } from "./lib.js";
import { getUserData } from "./util.js";
import { createView } from "./views/create.js";
import { detailsView } from "./views/details.js";
import { editView } from "./views/edit.js";
import { genresView } from "./views/genres.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { navigationView } from "./views/navigation.js";
import { profileView } from "./views/profile.js";
import { registerView } from "./views/register.js";
import { genreView } from "./views/genre.js";
import { html } from "./lib.js";

const root = document.getElementById("root");

page(authMiddleware);
page(ctxMiddleware);
page("/", homeView);
page("/genres", genresView);
page("/genres/:title", genreView);
page("/memes/:id", detailsView);
page("/details/:id", detailsView)
page("/edit/:id", editView);
page("/login", loginView);
page("/register", registerView);
page("/create", createView);
page("/profile", profileView);

page.start();

function ctxMiddleware(ctx, next) {
  ctx.render = renderMain.bind(null, ctx);

  next();
}

function renderMain(ctx, templateResult) {
  let layout = html`
    <nav>${navigationView(ctx)}</nav>
    <main>${templateResult}</main>
  `;
  render(layout, root);
}

function authMiddleware(ctx, next) {
  ctx.isAuthenticated = getUserData();

  next();
}

