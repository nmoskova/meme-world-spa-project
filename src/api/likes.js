import { del, get, post } from "./api.js";

const path = "/data/likes";

export async function getMemeLikes(memeId) {
  let query = encodeURIComponent(`memeId="${memeId}"`);

  return get(path + "?where=" + query);
}

export async function likeMeme(memeId) {
  return post(path, { memeId });
}

export async function unlikeMeme(likeId) {
    return await del(path + "/" + likeId )[0];
}

export async function getLike(memeId, ownerId) {
    let query = encodeURIComponent(`memeId="${memeId}" AND _ownerId="${ownerId}"`);
    return get(`${path}?where=${query}`)
}
