import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
function SpecialProduct() {
  return (
    <div className="col-6">
      <div className="special-product-card mb-4">
        <div className="d-flex justify-content-between">
          <div>
            <img
              className="img-fluid"
              src="images/samsungnote10+.avif"
              alt="special-product"
            />
          </div>
          <div className="content">
            <h5 className="branch">Samsung</h5>
            <h6 className="title">
              Samsung Galaxy Note10+ Mobile Phone; Sim...
            </h6>
            <ReactStars
              count={5}
              value={3}
              size={24}
              isHalf={false}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$100</span> &nbsp;
              <strike>$200</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p>
                <b>5</b> days
              </p>
              <div className="d-flex gap-10 align-align-items-center">
                <span className="badge rounded-circle p-2">11</span>:
                <span className="badge rounded-circle p-2">11</span>:
                <span className="badge rounded-circle p-2">11</span>
              </div>
            </div>
            <div className="product-count my-3">
              <p>Products: 5</p>
              <div className="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <Link className="button">Add to cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialProduct;
