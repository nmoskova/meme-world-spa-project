import { clearUserData, setUserData } from "../utils.js";
import { get, post} from "./api.js";

export async function login(email, password) {
  const result = await post("/users/login", { email, password });

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

export async function register(data) {
  const result = await post("/users/register", data);

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
