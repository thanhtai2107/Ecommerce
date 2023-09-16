import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
function Wishlist() {
  return (
    <>
      <Meta title="Contact Us"></Meta>
      <BreadCrumb title="Contact Us"></BreadCrumb>
      <div className="wishlist-wrapper home-wrapper-2 py-4">
        <div className="container-xl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className="py-3">
                  <h5 className="title">
                    Smart Watch with Advanced Health Monitoring, Fitness
                    Tracking
                  </h5>
                  <h6>$100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className="py-3">
                  <h5 className="title">
                    Smart Watch with Advanced Health Monitoring, Fitness
                    Tracking
                  </h5>
                  <h6>$100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className="py-3">
                  <h5 className="title">
                    Smart Watch with Advanced Health Monitoring, Fitness
                    Tracking
                  </h5>
                  <h6>$100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className="py-3">
                  <h5 className="title">
                    Smart Watch with Advanced Health Monitoring, Fitness
                    Tracking
                  </h5>
                  <h6>$100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
