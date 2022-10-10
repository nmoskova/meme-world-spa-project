import { get } from "./api.js"

export async function getAllGenres() {
   return get("/data/genres?sortBy=_createdOn%20desc");
}

// export async function getSpecificGenre(genre) {
//    return get(`/data/genres?where=title%3D%22${genre}%22`)
// }

