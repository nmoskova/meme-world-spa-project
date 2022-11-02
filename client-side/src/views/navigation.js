import { logout } from "../api/users.js";
import page from "../lib.js";
import { navigationTemplate } from "../templates/navigationTemplate.js";

export function navigationView(ctx) {
  return navigationTemplate(ctx.isAuthenticated, onLogout);
}

function onLogout() {
  logout();
  page.redirect("/");
}
