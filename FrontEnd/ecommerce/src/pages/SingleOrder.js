import { Button } from "@mui/material";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOrder } from "../state/Order/Action";
function SingleOrder() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orderId } = useParams();
  const { order } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getOrder(orderId));
  }, []);
  return (
    <>
      <Meta title="Chi tiết đơn hàng"></Meta>
      <BreadCrumb title="Chi tiết đơn hàng"></BreadCrumb>
      <div className="home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-6">
              <h5>Thông tin khách hàng</h5>
              <div className="mt-3 d-flex flex-column gap-15 ms-3">
                <div className="d-flex align-items-center gap-1">
                  <EmailOutlinedIcon />
                  <p>
                    <b>Email:</b> {order?.order?.email}
                  </p>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <PhoneEnabledOutlinedIcon />
                  <p>
                    <b>Số điện thoại:</b> {order?.order?.phone}
                  </p>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <HomeOutlinedIcon />
                  <p>
                    <b>Địa chỉ:</b> {order?.order?.shippingAddress}
                  </p>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <NotificationsNoneOutlinedIcon />
                  <p>
                    <b>Tình trạng đơn hàng:</b> {order?.order?.orderStatus}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <h5>Thông tin sản phẩm</h5>
              <div className="checkout-right-data">
                {order?.order &&
                  order?.order?.orderItemDTOList.map((item) => {
                    return (
                      <div className="border-bottom py-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center gap-10">
                            <div className="position-relative">
                              <span className="quantities badge bg-secondary text-white rounded-circle position-absolute">
                                {item.quantity}
                              </span>
                              <img src={item?.productDTO?.imgs[0]} alt="" />
                            </div>
                            <h4 className="title mb-0">
                              {item?.productDTO?.title}
                            </h4>
                          </div>
                          <div>
                            <h4 className="price mb-0">{item.price}</h4>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                <div className=" border-bottom d-flex align-items-center justify-content-between mt-3 pb-2">
                  <h4 className="total">Tổng cộng</h4>
                  <h5 className="total-price">{order?.order?.totalPrice}</h5>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <Button variant="contained" onClick={() => navigate("/order")}>
                Trở lại
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleOrder;
