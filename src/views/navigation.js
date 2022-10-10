import { getAllGenres } from "../api/genres.js"
import { html } from "../lib.js";

const navigationTemplate = (isAuthenticated) => html`
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <img src="../../html/images/meme.png" alt="Test Image" />
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Genres
            </a>
            <ul class="dropdown-menu">
              ${genreTemplate()}
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="/genres">View all genres</a>
              </li>
            </ul>
          </li>
          ${isAuthenticated ? userTemplate(isAuthenticated) : ""}
          ${!isAuthenticated ? guestTemplate : ""}
        </ul>
        <ul>
          ${isAuthenticated ? html`<p class="nav-item" style="text-align:right;" class="profile">Welcome,
            ${isAuthenticated.username}</p>` : ""}
        </ul>
      </div>
    </div>
  </nav>
`;


async function genreTemplate(){html`
<li>
  <a class="dropdown-item" href="/genres/${genre.title}">${genre.title}</a></li>
</li>
`
}


const guestTemplate = html`
  <li class="nav-item">
    <a class="nav-link" href="/login">Login</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/register">Register</a>
  </li>
`;

function userTemplate(isAuthenticated) {
  return html`
    <li class="nav-item">
      <a class="nav-link" href="/collection">My Memes</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/create">Create Meme</a>
    </li>
    <li class="nav-item ">
      <a class="nav-link" href="javascript:void(0)">Logout</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/profile">My Profile</a>
    </li>
    `;
}

export async function navigationView(ctx) {
  const genres = await getAllGenres();
  return navigationTemplate(ctx.isAuthenticated, genres);
}
