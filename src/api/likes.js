// import { getUserData } from '../util.js'
// import { getMemeById } from './memes'

// async function showDetails(ctx) {
//     let userData = getUserData();
//     let meme = await getMemeById(ctx.params.id);
//     let likes = await getLikesCount(ctx.params.id);
//     let likesFromCurrentUser = userData ? await getLikesCountFromUser(ctx.params.id, userData.userId) : undefined;
 
//     ctx.render(detailsTemplate(book, userData, likesCount, UserLikesCount));
// }
 
// export async function getLikesCount(bookId) {
//     return await get(`http://localhost:3030/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`)
// }
 
// export async function getLikesCountFromUser(bookId, userId) {
//     return await get(`http://localhost:3030/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
// }
 
// export async function addNewLike(data) {
//     return await post(`http://localhost:3030/data/likes`, data)
// }
 
// export async function addLike(ctx) {
 
//     try {
//         let userData = getUserData();
 
//         await addNewLike({bookId: ctx.params.id, ownerId: userData.userId });
//         page.redirect('/details/' + ctx.params.id);
//     } catch (error) {
//         alert(error.message);
//     }
// }