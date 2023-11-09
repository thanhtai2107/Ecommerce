import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { findProductById } from "../state/Product/Action";
import { addItemToCart } from "../state/Cart/Action";
import { createReview, getReviews } from "../state/Review/Action";
import { AiOutlineHeart } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkExpired } from "../service";

function SingleProduct() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [numRate, setNumRate] = useState(0);
  const [reviews, setReview] = useState("");
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { product } = useSelector((store) => store);
  const { auth } = useSelector((store) => store);
  const { review } = useSelector((store) => store);
  console.log(review.reviews);
  const userId = auth.jwt?.user?.id;

  const newRating = (numRating) => {
    setNumRate(numRating);
  };

  const handleAddToCart = () => {
    let price = quantity * product.product.price;
    const data = {
      userId: userId,
      productId: productId,
      quantity: quantity,
      price: price,
    };
    console.log("data add to cart", data);
    if (auth?.jwt && checkExpired(auth?.jwt?.token)) {
      dispatch(addItemToCart(data));
    } else {
      navigate("/login");
    }
  };

  const handleCreateReview = (event) => {
    event.preventDefault();
    const data = {
      productId: productId,
      numRate: numRate,
      review: reviews,
      userId: userId,
    };
    if (auth?.jwt && checkExpired(auth?.jwt?.token)) {
      dispatch(createReview(data));
    } else {
      navigate("/login");
    }
    setReview("");
  };
  useEffect(() => {
    dispatch(findProductById(productId));
  }, [productId]);

  useEffect(() => {
    dispatch(getReviews(productId));
  }, []);
  return (
    <>
      <Meta title="Single Product"></Meta>
      <BreadCrumb title={product.product?.title}></BreadCrumb>
      <div className="main-product-wrapper home-wrapper-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div className="">
                  <div
                    id="carouselExampleControls"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src={product?.product?.imgs[0]}
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      {product?.product?.imgs.length > 1 ? (
                        product?.product?.imgs
                          .slice(1, product?.product?.imgs.length)
                          .map((img) => {
                            return (
                              <div class="carousel-item">
                                <img
                                  src={img}
                                  class="d-block w-100"
                                  alt="..."
                                />
                              </div>
                            );
                          })
                      ) : (
                        <></>
                      )}
                      <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                      >
                        <span
                          class="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                      >
                        <span
                          class="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">{product.product?.title}</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">{product.product?.price}</p>
                  <div className="d-flex gap-10 align-items-center">
                    <ReactStars
                      count={5}
                      value={numRate}
                      size={24}
                      isHalf={false}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <p>{review?.reviews?.length} đánh giá</p>
                  </div>
                </div>
                <div className="border-bottom">
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Thương hiệu :</h3>
                    <p className="product-data">{product.product?.brand}</p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Đã bán :</h3>
                    <p className="product-data">
                      {product?.product?.sold} sản phẩm
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Còn lại :</h3>
                    <p className="product-data">
                      {product?.product?.quantity} sản phẩm
                    </p>
                  </div>

                  <div className="d-flex align-items-center gap-10 my-2">
                    <h3 className="product-heading">Tình trạng :</h3>
                    {product?.product?.quantity > 0 ? (
                      <p className="product-data">Còn hàng</p>
                    ) : (
                      <p className="product-data">Hết hàng</p>
                    )}
                  </div>
                  <div className="d-flex flex-row align-items-center gap-10 mt-2 mb-3">
                    <h3 className="product-heading">Số lượng :</h3>
                    <div>
                      <input
                        className="form-control"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        type="number"
                        min={1}
                        max={product?.product?.quantity}
                        style={{ width: "70px" }}
                      />
                    </div>
                    <button
                      onClick={handleAddToCart}
                      className="button border-0"
                    >
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                  <div className="">
                    <Link>
                      <AiOutlineHeart className="fs-5 me-1" />
                      Thêm vào danh sách yêu thích
                    </Link>
                  </div>
                  <div className="d-flex flex-column  gap-10 my-2">
                    <h3 className="product-heading">Giao và trả hàng</h3>
                    <p className="product-data">
                      Miễn phí ship và hoàn trả tất cả các đơn hàng.
                      <b> Quý khách sẽ nhận hàng trong vòng 5-7 ngày!</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper home-wrapper-2 py">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h4>Mô tả sản phẩm</h4>
              <div className="bg-white p-3">
                <p>{product.product?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="review-wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h4 id="review">Đánh giá</h4>
              <div className="review-inner-wrapper">
                <div className="review-form py-4">
                  <h4>Viết đánh giá</h4>
                  <form
                    action=""
                    onSubmit={(event) => handleCreateReview(event)}
                    className="d-flex flex-column gap-15"
                  >
                    <div>
                      <ReactStars
                        count={5}
                        value={numRate}
                        size={24}
                        isHalf={false}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                        onChange={newRating}
                      />
                    </div>
                    <div>
                      <textarea
                        value={reviews}
                        cols={4}
                        className="form-control"
                        placeholder="Comment"
                        onChange={(e) => setReview(e.target.value)}
                      />
                    </div>

                    <div>
                      <button className="button border-0">Đánh giá</button>
                    </div>
                  </form>
                </div>
                <div className="reviews">
                  {review?.reviews.map((item) => {
                    return (
                      <div className="review mt-3">
                        <div className="d-flex align-items-center gap-10">
                          <h6 className="mb-0">{item.user.fullname}</h6>
                          <ReactStars
                            count={5}
                            value={item.numRate}
                            size={24}
                            isHalf={false}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                          />
                        </div>
                        <p>{item.review}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
