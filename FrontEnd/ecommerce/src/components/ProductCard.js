import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
function ProductCard(props) {
  const { grid } = props;
  let location = useLocation;
  return (
    <>
      <div
        className={`${(location.pathname = "/product"
          ? `gr-${grid}`
          : "col-3")}`}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img
              className="img-fluid"
              src="images/watch-2.avif"
              alt="product"
            />
            <img
              className="img-fluid"
              src="images/watch-1.avif"
              alt="product"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Sony</h6>
            <h5 className="product-title">
              Kid headphone bulk 10 pack multi color for student
            </h5>
            <p className="price">$100</p>
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
            <p className="description">
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt...
            </p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-10">
              <Link>
                <img src="images/add-cart.svg" alt="add-cart" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="add-cart" />
              </Link>
              <Link>
                <img src="images/prodcompare.svg" alt="add-cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
