import { checkExpired } from "../service/index";

export default function authHeader() {
  const jwt = localStorage.getItem("jwt");
  if (jwt && checkExpired(jwt)) {
    return {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    };
  } else {
    return {};
  }
}
