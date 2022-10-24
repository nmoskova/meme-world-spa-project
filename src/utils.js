function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'))
}

function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data));
}

function clearUserData() {
    sessionStorage.removeItem('userData');
}

function uploadFile() {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      sessionStorage.setItem("image", reader.result);
    });

    reader.readAsDataURL(this.files[0]);
  }

export {
    getUserData,
    setUserData,
    clearUserData,
    uploadFile
};