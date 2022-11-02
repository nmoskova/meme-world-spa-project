import { html } from "../lib.js";
import { nextPage, paginationBuilder, previousPage } from "../utils.js";
import { memeCard } from "./memeCard.js";

export const catalogTemplate = (memes, page, pageSize, memesCount) => html`
  <div>
    <h1 style="margin-bottom: 20px;">Memes</h1>
  </div>
  <div>
    ${
      memes.length == 0
        ? html`<img
            src="../../html/images/no-memes.jpg"
            class="img-fluid rounded mx-auto d-block"
            alt="no-memes-in-database-img"
          />`
        : memes.map((x) => memeCard(x))
    }
  </div>
<nav style="margin-top:10px;" aria-label="Page navigation example"">
  <ul class="pagination justify-content-center">
    <li class="page-item">
      <a class="page-link" href="/memes?page=${previousPage(
        page
      )}" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    ${paginationBuilder(page, pageSize, memesCount).map(
      (x) =>
        html`<li class="page-item">
          <a class="page-link" href="/memes?page=${x}">${x}</a>
        </li>`
    )}
    <li class="page-item">
      <a class="page-link" href="/memes?page=${nextPage(
        page,
        pageSize,
        memesCount
      )}" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
  </div>
`;
