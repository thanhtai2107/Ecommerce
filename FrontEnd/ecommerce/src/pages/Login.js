import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
function Login() {
  return (
    <>
      <Meta title="Login"></Meta>
      <BreadCrumb title="Login"></BreadCrumb>
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="login-form">
                <h3 className="text-center">Login</h3>
                <form action="" className="py-2">
                  <div className="py-2">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <Link to="/forgot-password" className="forgot-password">
                    <p className="m-2">Forgot your password?</p>
                  </Link>
                  <div className="d-flex gap-10 justify-content-center align-items-center mt-3">
                    <button className="button" type="submit">
                      Login
                    </button>
                    <Link to="/register">
                      <button className="button">Sign up</button>
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
