import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
function ForgotPassword() {
  return (
    <>
      <Meta title="Forgot Password"></Meta>
      <BreadCrumb title="Forgot Password"></BreadCrumb>
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="login-form">
                <h3 className="text-center">Reset your password</h3>
                <p className="text-center">
                  We will send you an email to reset password
                </p>
                <form action="" className="py-2">
                  <div className="py-2">
                    <input
                      type="email"
                      placeholder="Your mail"
                      className="form-control"
                    />
                  </div>
                  <div className="d-flex gap-10 justify-content-center align-items-center mt-3">
                    <button className="button border-0" type="submit">
                      Send
                    </button>
                    <button className="button border-0 bg-white text-dark">
                      Cancel
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

export default ForgotPassword;
