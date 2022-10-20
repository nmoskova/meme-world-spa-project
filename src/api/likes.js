import { get, post } from "./api.js";

const path = "/data/likes";

export async function getMemeLikes(memeId) {
  let query = encodeURIComponent(`=movieId="${memeId}"`);

  return get(path + "?where" + query);
}

export async function likeMeme(memeId) {
  return post(path, { memeId });
}
