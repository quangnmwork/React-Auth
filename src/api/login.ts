import axiosClient from "./repository";
import { AuthTypeNameSpace } from "../IType/IType";
export function login(userInput: AuthTypeNameSpace.UserLoginInput) {
  return axiosClient.post("users/login", {
    email: userInput.email,
    password: userInput.password,
  });
}
