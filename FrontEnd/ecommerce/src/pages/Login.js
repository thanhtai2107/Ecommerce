import { Link, useLocation, useNavigate } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../state/auth/Action";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

function Login() {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (auth?.jwt) {
      if (
        auth?.jwt?.user?.role === "ADMIN" &&
        Date.now() <= jwtDecode(auth.jwt.token).exp * 1000
      ) {
        navigate("/admin");
      } else if (
        auth?.jwt?.user?.role === "USER" &&
        Date.now() <= jwtDecode(auth.jwt.token).exp * 1000
      ) {
        navigate("/");
      }
    }
    if (location === "/login" || location === "/register") {
      navigate(-1);
    }
  }, [auth?.jwt]);
  const handleLogin = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(login(userData));
  };
  return (
    <>
      <Meta title="Login"></Meta>
      <BreadCrumb title="Login"></BreadCrumb>
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="login-form">
                <h3 className="text-center">Đăng nhập</h3>
                <form action="" onSubmit={handleLogin} className="py-2">
                  <div className="py-2">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      name="email"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Mật khẩu"
                      className="form-control"
                      name="password"
                    />
                  </div>
                  <Link to="/forgot-password" className="forgot-password">
                    <p className="m-2">Quên mật khẩu?</p>
                  </Link>
                  <div className="d-flex gap-10 justify-content-center align-items-center mt-3">
                    <button className="button" type="submit">
                      Đăng nhập
                    </button>
                    <Link to="/register">
                      <button className="button">Đăng kí</button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
