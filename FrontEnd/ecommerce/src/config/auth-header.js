export default function authHeader(contentType) {
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    return {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    };
  } else {
    return {};
  }
}
