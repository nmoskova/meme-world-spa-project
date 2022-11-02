import { html } from "../lib.js";

export const navigationTemplate = (isAuthenticated, onLogout) => html`
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <img src="../../html/images/meme.png" alt="Test Image" />
      ${isAuthenticated
        ? html`<p
            class="nav-item"
            style="padding: 20px; text-align:left;"
            class="profile"
          >
            Welcome, ${isAuthenticated.username}
          </p>`
        : ""}
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/genres"
              >Genres</a
            >
          </li>

          ${isAuthenticated ? userTemplate(isAuthenticated, onLogout) : ""}
          ${!isAuthenticated ? guestTemplate : ""}
        </ul>
      </div>
    </div>
  </nav>
`;

const guestTemplate = html`
  <li class="nav-item">
    <a class="nav-link active" href="/login">Login</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="/register">Register</a>
  </li>
`;

function userTemplate(isAuthenticated, onLogout) {
  return html`
    <li class="nav-item">
      <a class="nav-link active" href="/create">Create Meme</a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" href="/profile/${isAuthenticated.id}"
        >My Profile</a
      >
    </li>
    <li class="nav-item ">
      <a class="nav-link active" @click=${onLogout} href="javascript:void(0)"
        >Logout</a
      >
    </li>
  `;
}
