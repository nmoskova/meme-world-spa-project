import { html, page, render } from "./lib.js";
import { getUserData } from "./utils.js";
import { createGenreView } from "./views/createGenre.js";
import { createMemeView } from "./views/createMeme.js";
import { detailsView } from "./views/details.js";
import { editMemeView } from "./views/editMeme.js";
import { genreView } from "./views/genre.js";
import { genresView } from "./views/genres.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { navigationView } from "./views/navigation.js";
import { profileView } from "./views/profile.js";
import { registerView } from "./views/register.js";

const root = document.getElementById("root");

page(authMiddleware);
page(ctxMiddleware);
page("/", homeView);
page("/genres", genresView);
page("/genres/:title", genreView);
page("/memes", homeView);
page("/memes/:id", detailsView);
page("/details/:id", detailsView);
page("/edit/:id", editMemeView);
page("/login", loginView);
page("/register", registerView);
page("/create", createMemeView);
page("/create/genre", createGenreView);
page("/profile/:id", profileView);

page.start();

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

function ctxMiddleware(ctx, next) {
  ctx.render = renderMain.bind(null, ctx);

  next();
}