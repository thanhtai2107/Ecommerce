import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from "react-router-dom";
function ProductCard(props) {
  // console.log(props);
  const grid = props.grid;
  // console.log(grid);
  const product = props.product;
  // console.log(product);
  const navigate = useNavigate();

  let location = useLocation;
  return (
    <>
      <div
        className={`${(location.pathname = "/product"
          ? `gr-${grid}`
          : "col-3")}`}
      >
        <div
          // to={`/product/:${product.id}`}
          onClick={() => navigate(`/product/${product.id}`)}
          className="product-card position-relative"
        >
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
            <h6 className="brand">{product.brand}</h6>
            <h5 className="product-title">{product.title}</h5>
            <p className="price">{product.price}</p>
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
            <p className="description"></p>
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
        </div>
      </div>
    </>
  );
}

export default ProductCard;
