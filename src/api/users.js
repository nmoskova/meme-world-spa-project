import { clearUserData, setUserData } from "../util.js";
import { get, post} from "./api.js";

export async function login(email, password) {
  const result = await post("/users/login", { email, password });

  const userData = {
    id: result._id,
    username: result.username,
    email: result.email,
    gender: result.gender,
    accessToken: result.accessToken,
  };

  setUserData(userData);

  return result;
}

export async function register(username, email, password, gender, image) {
  const result = await post("/users/register", {
    username,
    email,
    password,
    gender,
    image
  });

  const userData = {
    id: result._id,
    username: result.username,
    email: result.email,
    gender: result.gender,
    image: result.image,
    accessToken: result.accessToken,
  };

  setUserData(userData);

  return result;
}

export function logout() {
  const choice = confirm("Are you sure you want to leave Meme-World?");
  
  if (choice) {
    get("/users/logout");
    clearUserData();
  }
}
