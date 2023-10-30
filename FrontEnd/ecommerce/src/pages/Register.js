import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { useDispatch } from "react-redux";
import { register } from "../state/auth/Action";
import { useNavigate } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const userData = {
      fullname: data.get("fullname"),
      email: data.get("email"),
      password: data.get("password"),
      address: data.get("address"),
      phone: data.get("phone"),
    };
    dispatch(register(userData));
    if (userData) {
      navigate("/login");
    }

    console.log(userData);
  };

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
                <form action="" onSubmit={handleRegister} className="py-2">
                  <div className="py-2">
                    <input
                      type="text"
                      placeholder="Fullname"
                      className="form-control"
                      id="fullname"
                      name="fullname"
                    />
                  </div>
                  <div className="py-2">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control"
                      id="password"
                      name="password"
                    />
                  </div>
                  <div className="py-2">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                      id="address"
                      name="address"
                    />
                  </div>
                  <div className="py-2">
                    <input
                      type="text"
                      placeholder="Phone"
                      className="form-control"
                      id="phone"
                      name="phone"
                    />
                  </div>
                  <div className="d-flex gap-10 justify-content-center align-items-center mt-3">
                    <button type="submit" className="button border-0">
                      Create
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

export default Register;
