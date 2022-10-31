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

function nextPage(page, memesCount) {
  let pageSize = 4;
  return Math.min(Math.ceil(memesCount / pageSize), page + 1);
};

export {
  getUserData,
  setUserData,
  clearUserData,
  uploadFile,
  previousPage,
  nextPage,
};
