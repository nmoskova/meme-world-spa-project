import { del, get, post, put } from "./api.js";

const path = "/data/comments";

export async function getMemeComments(memeId) {
  let query = (`?where=memeId%3D%22${memeId}%22&select=comment%2Cusername`);

  return get(path + query);
}

export async function createComment(data) {
    return post(path, data)
}

export async function deleteComment(commentId) {
    return del(`${path}/${commentId}`)
}

export async function editComment(commentId, data ) {
    return put(`${path}/${commentId}`, data)
}