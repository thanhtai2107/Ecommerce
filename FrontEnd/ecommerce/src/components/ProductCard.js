import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from "react-router-dom";
function ProductCard(props) {
  const grid = props.grid;

  const product = props.product;

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
          onClick={() => navigate(`/product/${product?.id}`)}
          className="product-card position-relative"
        >
          <div className="product-image">
            <img
              className="img-fluid"
              style={{ height: "100%" }}
              src={product?.imgs[0]}
              alt="product"
            />
            {product.imgs.length > 1 ? (
              <img
                className="img-fluid"
                style={{ height: "100%" }}
                src={product?.imgs[1]}
                alt="product"
              />
            ) : (
              <></>
            )}
          </div>
          <div className="product-details">
            <h6 className="brand">{product?.brand}</h6>
            <h5 className="product-title">{product?.title}</h5>
            <p className="price">{product?.price}</p>
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
        </div>
      </div>
    </>
  );
}

export default ProductCard;
