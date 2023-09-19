import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
function ResetPassword() {
  return (
    <>
      <Meta title="Reset Password"></Meta>
      <BreadCrumb title="Reset Password"></BreadCrumb>
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="login-form">
                <h3 className="text-center">Reset Password</h3>
                <form action="" className="py-2">
                  <div className="py-2">
                    <input
                      type="password"
                      placeholder="Current password"
                      className="form-control"
                    />
                  </div>
                  <div className="py-2">
                    <input
                      type="password"
                      placeholder="New password"
                      className="form-control"
                    />
                  </div>
                  <div className="py-2">
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className="form-control"
                    />
                  </div>

                  <div className="d-flex gap-10 justify-content-center align-items-center mt-3">
                    <button className="button border-0" type="submit">
                      Reset
                    </button>
                    <button className="button bg-white border-0">
                      <Link to="/" className="text-dark">
                        Cancel
                      </Link>
                    </button>
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

export default ResetPassword;
