import { del, get, post, put } from "./api.js";

const path = "/data/memes";
const PAGE_SIZE = 4;

export async function getMemes(page) {
  const query = [];

  if (page) {
    query.push(`offset=${(page - 1) * PAGE_SIZE}`);
    query.push(`pagesize=${PAGE_SIZE}`);
  }

  const querystring = query.length ? `?${query.join('&')}` : '';
  
  return get(path + querystring);
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
  return get(
    `${path}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
  );
}

export async function getMemesByGenre(genre) {
  return get(`${path}?where=genre%3D%22${genre}%22`);
}

export async function getMemesCount() {
  return get(path + "?count");
}
