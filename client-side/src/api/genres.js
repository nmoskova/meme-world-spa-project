import { get, post } from "./api.js";

const path = "/data/genres";

export async function getAllGenres() {
  return get(path + "?sortBy=_createdOn%20desc");
}

export async function getSpecificGenre(genre) {
  return get(path + `?where=title%3D%22${genre}%22`);
}

export async function getGenreTitles() {
  return get(path + `?select=title`);
}

export async function createGenre(genre) {
  return post(path, genre);
}
