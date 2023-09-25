import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { BiArrowBack } from "react-icons/bi";

function CheckOut() {
  return (
    <>
      <Meta title="Check Out"></Meta>
      <BreadCrumb title="Check Out"></BreadCrumb>
      <div className="checkout-wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3>Devoloper</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/" className="text-dark">
                        Cart
                      </Link>
                    </li>
                    &nbsp; /
                    <li class="breadcrumb-item active" aria-current="page">
                      Information
                    </li>
                    &nbsp; /
                    <li class="breadcrumb-item active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4>Contact Information</h4>
                <p>devoloper@gmail.com</p>
                <form
                  action=""
                  className="d-flex flex-wrap gap-15 justify-content-between"
                >
                  <div className="w-100">
                    <select name="" id="" className="form-control form-select">
                      <option value="" selected disabled>
                        Select your country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apartment, suit, etc"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" id="" className="form-control form-select">
                      <option value="" selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zip code"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link
                        className="text-dark d-flex align-items-center gap-1"
                        to="/cart"
                      >
                        <BiArrowBack />
                        Return to Cart
                      </Link>
                      <Link className="button" to="/our-store">
                        Continue to Shopping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="checkout-right-data">
                <div className="border-bottom py-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-10">
                      <div className="position-relative">
                        <span className="quantities badge bg-secondary text-white rounded-circle position-absolute">
                          1
                        </span>
                        <img src="images/watch.jpg" alt="" />
                      </div>
                      <h4 className="title mb-0">
                        Kids headphones bulk 10 pack multi colored for students
                      </h4>
                    </div>
                    <div>
                      <h4 className="price mb-0">$100</h4>
                    </div>
                  </div>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-10">
                      <div className="position-relative">
                        <span className="quantities badge bg-secondary text-white rounded-circle position-absolute">
                          1
                        </span>
                        <img src="images/watch.jpg" alt="" />
                      </div>
                      <h4 className="title mb-0">
                        Kids headphones bulk 10 pack multi colored for students
                      </h4>
                    </div>
                    <div>
                      <h4 className="price mb-0">$100</h4>
                    </div>
                  </div>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <p className="total">Subtotal</p>
                    <p className="total-price">$100</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between ">
                    <p className="total">Shipping</p>
                    <p className="total-price">$5</p>
                  </div>
                </div>
                <div className=" border-bottom d-flex align-items-center justify-content-between mt-3 pb-2">
                  <h4 className="total">Total</h4>
                  <h5 className="total-price">$100</h5>
                </div>
                <div className="py-3 d-flex justify-content-end">
                  <button className="button border-0">CheckOut</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
