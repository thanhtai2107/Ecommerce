import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../state/Cart/Action";
function Cart() {
  const { cart } = useSelector((store) => store);
  const { auth } = useSelector((store) => store);
  const userId = auth.jwt?.user?.id;
  const dispatch = useDispatch();
  console.log(cart.cart);

  useEffect(() => {
    dispatch(getCart(userId));
  }, [userId]);
  return (
    <>
      <Meta title="Cart"></Meta>
      <BreadCrumb title="Cart"></BreadCrumb>
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header d-flex align-items-center justify-content-between">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              {cart?.cart ? (
                cart?.cart?.data?.cartItems.map((item) => {
                  return (
                    <>
                      <div
                        className="cart-data d-flex justify-content-between align-items-center "
                        key={item.id}
                      >
                        <div className="cart-col-1 d-flex align-items-center gap-15">
                          <div>
                            <img src="images/watch.jpg" alt="" />
                          </div>
                          <h5 className="title mb-0">{item.product.title}</h5>
                        </div>
                        <div className="cart-col-2">
                          <h4 className="price">{item.product.price}</h4>
                        </div>
                        <div className="cart-col-3 d-flex align-items-center gap-10">
                          <div>
                            <input
                              className="form-control"
                              type="number"
                              min={1}
                              max={10}
                              value={item.quantity}
                            />
                          </div>
                          <div>
                            <AiFillDelete className="delete" />
                          </div>
                        </div>
                        <div className="cart-col-4">
                          <h4 className="total">{item.price}</h4>
                        </div>
                      </div>
                    </>
                  );
                })
              ) : (
                <div>
                  <h1>No items</h1>
                </div>
              )}
              <div className="col-12 py-3 d-flex justify-content-between">
                <button className="button border-0">Continue Shopping</button>
                <button className="button border-0">Update cart</button>
              </div>
              <div className="col-12 py-3">
                <div className="cart-footer d-flex justify-content-between">
                  <div>
                    <p>Order special instructions</p>
                  </div>
                  <div className="d-flex flex-column gap-15">
                    <div className="d-flex align-items-center gap-10 justify-content-end">
                      <p>Total</p>
                      <h4 className="mb-0">{cart?.cart?.data?.totalPrice}</h4>
                    </div>
                    <p>Taxes and shipping calculated at checkout</p>
                    <div>
                      <Link to="/checkout" className="w-100">
                        <button className="button border-0 w-100">
                          Check Out
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
<></>;
