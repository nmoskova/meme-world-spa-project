import { del, get, post, put } from "./api.js";

const path = "/data/memes";

export async function getMemes(page, pageSize) {
  let query = "";
  if (page) {
    query = `?offset=${(page - 1) * pageSize}&pageSize=${pageSize}`;
  }
  return get(path + query);
}

export async function createMeme(meme) {
  return post(`${path}/`, meme);
}

export async function getMemeById(id) {
  return get(`${path}/` + id);
}

export async function updateMeme(id, meme) {
  return put(`${path}/` + id, meme);
}

export async function deleteMeme(id) {
  return del(`${path}/` + id);
}

export async function getMemesByUser(userId) {
  let query = encodeURIComponent(`_ownerId="${userId}"`) + "&sortBy=" + encodeURIComponent("_createdOn")
  return get(
    `${path}?where=${query}`
  );
}

export async function getMemesByGenre(genre) {
  let query = encodeURIComponent(`genre = "${genre}"`);
  return get(`${path}?where=${query}`);
}

export async function getMemesCount() {
  return get(path + "?count");
}
