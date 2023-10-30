import axios from "axios";

export const API_BASE_URL = "http://localhost:8080";

const jwt = localStorage.getItem("jwt");
console.log("jwt", jwt);

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${jwt}`,
    "Content-Type": "application/json",
  },
});
export const api2 = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${jwt}`,
    "Content-Type": "multipart/form-data",
  },
});
