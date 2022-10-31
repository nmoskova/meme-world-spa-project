import { html } from "../lib.js";
import { nextPage, previousPage } from "../utils.js";
import { memeCard } from "./memeCard.js";

export const catalogTemplate = (memes, page, memesCount) => html`
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
      <a class="page-link" href="/?page=${previousPage(
        page
      )}" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    ${paginationBuilder(page, memesCount).map(
      (x) =>
        html`<li class="page-item">
          <a class="page-link" href="/?page=${x}">${x}</a>
        </li>`
    )}
    <li class="page-item">
      <a class="page-link" href="/?page=${nextPage(
        page,
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

function paginationBuilder(page, memesCount) {
  let pageSize = 4;
  let maxLastPage = Math.ceil(memesCount / pageSize);

  if (maxLastPage <= 1) {
    return [1];
  } else if (maxLastPage == 2) {
    return [1, 2];
  } else if (page == 1 ){
      return [1, 2, 3];
    } 
  let lastPage = Math.min(maxLastPage, page+1);
  let secondPage = page;
  let firstPage = page - 1;

  return [firstPage, secondPage, lastPage]



  }

