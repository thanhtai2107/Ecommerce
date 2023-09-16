import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
function Register() {
  return (
    <>
      <Meta title="Create An Account"></Meta>
      <BreadCrumb title="Create An Account"></BreadCrumb>
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="login-form">
                <h3 className="text-center">Create An Account</h3>
                <form action="" className="py-2">
                  <div className="py-2">
                    <input
                      type="text"
                      placeholder="Fullname"
                      className="form-control"
                    />
                  </div>
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
                  <div className="py-2">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                    />
                  </div>
                  <div className="py-2">
                    <input
                      type="text"
                      placeholder="Phone"
                      className="form-control"
                    />
                  </div>
                  <div className="d-flex gap-10 justify-content-center align-items-center mt-3">
                    <button className="button border-0">Create</button>
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

export default Register;
