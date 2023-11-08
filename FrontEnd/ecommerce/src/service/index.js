import { jwtDecode } from "jwt-decode";
export const logout = () => {
  localStorage.removeItem("jwt");
};

export const checkExpired = (jwt) => {
  return Date.now() >= jwtDecode(jwt).exp * 1000 ? false : true;
};
