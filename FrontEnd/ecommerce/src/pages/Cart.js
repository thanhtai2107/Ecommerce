import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
function Cart() {
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
              <div className="cart-data d-flex justify-content-between align-items-center">
                <div className="cart-col-1 d-flex align-items-center gap-15">
                  <div>
                    <img src="images/watch.jpg" alt="" />
                  </div>
                  <h5 className="title mb-0">
                    Kids headphones bulk 10 pack multi colored for students
                  </h5>
                </div>
                <div className="cart-col-2">
                  <h4 className="price"> $100</h4>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-10">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      min={1}
                      max={10}
                      defaultValue={1}
                    />
                  </div>
                  <div>
                    <AiFillDelete className="delete" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h4 className="total">$100</h4>
                </div>
              </div>
            </div>
            <div className="col-12 py-3">
              <button className="button border-0">Continue Shopping</button>
            </div>
            <div className="col-12 py-3">
              <div className="cart-footer d-flex justify-content-between">
                <div>
                  <p>Order special instructions</p>
                </div>
                <div className="d-flex flex-column gap-15">
                  <div className="d-flex align-items-center gap-10 justify-content-end">
                    <p>Subtotal</p>
                    <h4 className="mb-0">$100</h4>
                  </div>
                  <p>Taxes and shipping calculated at checkout</p>
                  <div>
                    <button className="button border-0 w-100">Check Out</button>
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
