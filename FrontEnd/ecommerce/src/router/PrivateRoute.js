import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../service/index";

export const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      if (Date.now() >= jwtDecode(jwt).exp * 1000) {
        logout();
      }
    } else {
      navigate("/login");
    }
  }, [jwt]);

  return jwt ? children : navigate("/login");
};
