import { get, post } from "./api.js"

export async function getAllGenres() {
   return get("/data/genres?sortBy=_createdOn%20desc");
}

export async function getSpecificGenre(genre) {
   return get(`/data/genres?where=title%3D%22${genre}%22`)
}

export async function getGenreTitles() {
   return get(`/data/genres?select=title`)
}

export async function createGenre(genre) {
   return post("/data/genres", genre)
}