function getUserData() {
  return JSON.parse(sessionStorage.getItem("userData"));
}

function setUserData(data) {
  sessionStorage.setItem("userData", JSON.stringify(data));
}

function clearUserData() {
  sessionStorage.removeItem("userData");
}

function uploadFile() {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    sessionStorage.setItem("image", reader.result);
  });

  reader.readAsDataURL(this.files[0]);
}

const previousPage = (page) => Math.max(1, page - 1);

function nextPage(page, pageSize, memesCount) {
  return Math.min(Math.ceil(memesCount / pageSize), page + 1);
}

function paginationBuilder(page, pageSize, memesCount) {
  let maxLastPage = Math.ceil(memesCount / pageSize);

  if (maxLastPage <= 1) {
    return [1];
  } else if (maxLastPage == 2) {
    return [1, 2];
  } else if (page <= 1) {
    return [1, 2, 3];
  }

  let lastPage = Math.min(maxLastPage, page + 1);

  if (lastPage == maxLastPage) {
    return [lastPage - 2, lastPage - 1, lastPage];
  } else {
    return [lastPage - 2, lastPage - 1, lastPage];
  }
}

export {
  getUserData,
  setUserData,
  clearUserData,
  uploadFile,
  previousPage,
  nextPage,
  paginationBuilder,
};

