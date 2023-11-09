import { Link, useNavigate } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../state/Order/Action";
import { checkExpired } from "../service";

function CheckOut() {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);
  const [provinceCode, setProvinceCode] = useState();
  const [districtCode, setDistrictCode] = useState();
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const BASE_ADDRESS_URL = "https://provinces.open-api.vn/api";
  const { auth } = useSelector((store) => store);
  const { cart } = useSelector((store) => store);
  const dispatch = useDispatch();
  console.log("auth", auth?.jwt?.user);
  const handleCheckout = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const createOrderData = {
      userId: auth?.jwt?.user?.id,
      fullname: fullname,
      email: email,
      phone: phone,
      street: street,
      ward: selectedWard,
      district: selectedDistrict,
      province: selectedProvince,
    };
    console.log(createOrderData);
    if (auth?.jwt && checkExpired(auth?.jwt?.token)) {
      dispatch(createOrder(createOrderData));
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    if (auth?.jwt) {
      setFullname(auth.jwt.user.fullname);
      setEmail(auth.jwt.user.email);
      setPhone(auth.jwt.user.phone);
    }
  }, []);
  const handleProvinceSelect = (e) => {
    setSelectedProvince(e);
    const provinceData = province.find((province) => province.name === e);
    setProvinceCode(provinceData.code);
  };
  const handleWardSelect = (e) => {
    setSelectedWard(e);
  };
  const handleDistrictSelect = (e) => {
    setSelectedDistrict(e);
    console.log(e);
    const districtData = district.find((district) => district.name === e);
    console.log(districtData.code);
    setDistrictCode(districtData.code);
  };
  useEffect(() => {
    axios
      .get(`${BASE_ADDRESS_URL}/p`)
      .then((data) => {
        setProvince(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedProvince]);
  useEffect(() => {
    if (selectedProvince != null) {
      axios
        .get(`${BASE_ADDRESS_URL}/p/${provinceCode}?depth=2`)
        .then((data) => {
          setDistrict(data.data.districts);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setDistrict([]);
      setWard([]);
    }
  }, [selectedProvince, provinceCode]);
  useEffect(() => {
    if (selectedDistrict != null) {
      axios
        .get(`${BASE_ADDRESS_URL}/d/${districtCode}?depth=2`)
        .then((data) => {
          console.log("ward", data.data);
          setWard(data.data.wards);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setWard([]);
    }
  }, [selectedDistrict, districtCode]);
  return (
    <>
      <Meta title="Thanh toán"></Meta>
      <BreadCrumb title="Thanh toán"></BreadCrumb>
      <div className="checkout-wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h4>Thông tin liên hệ</h4>

                <form
                  onSubmit={handleCheckout}
                  action=""
                  className="d-flex flex-wrap gap-15 justify-content-between"
                >
                  <div className="w-100">
                    <input
                      value={fullname}
                      type="text"
                      className="form-control"
                      placeholder="Họ và Tên"
                      name="fullname"
                      onChange={(e) => setFullname(e.target.value)}
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      value={email}
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      value={phone}
                      type="text"
                      className="form-control"
                      placeholder="Số điện thoại"
                      name="phone"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="w-100 d-flex gap-10">
                    <div className="flex-grow-1">
                      <select
                        value={selectedProvince}
                        name=""
                        id=""
                        className="form-control form-select"
                        onChange={(e) => handleProvinceSelect(e.target.value)}
                      >
                        <option value="" selected disabled>
                          Tỉnh/Thành phố
                        </option>
                        {province.map((province) => {
                          return (
                            <option
                              value={province.name}
                              selected={province.name === selectedProvince}
                            >
                              {province.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="flex-grow-1">
                      <select
                        value={selectedDistrict}
                        name=""
                        id=""
                        className="form-control form-select"
                        onChange={(e) => handleDistrictSelect(e.target.value)}
                      >
                        <option value="" selected disabled>
                          Quận/Huyện
                        </option>
                        {district.map((district) => {
                          return (
                            <option
                              value={district.name}
                              selected={district.name === selectedDistrict}
                            >
                              {district.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="w-100 d-flex gap-10">
                    <div className="flex-grow-1">
                      <select
                        value={selectedWard}
                        name=""
                        id=""
                        className="form-control form-select"
                        onChange={(e) => handleWardSelect(e.target.value)}
                      >
                        <option value="" selected disabled>
                          Phường/Xã
                        </option>
                        {ward.map((ward) => {
                          return (
                            <option
                              value={ward.name}
                              selected={ward.name === selectedWard}
                            >
                              {ward.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="flex-grow-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Số nhà, đường, khu phố"
                        name="street"
                        onChange={(e) => setStreet(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="py-3 d-flex justify-content-center w-100">
                    <button className="button border-0">Thanh Toán</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="checkout-right-data">
                <h4>Thông tin sản phẩm</h4>
                {cart?.cart ? (
                  cart?.cart?.data?.cartItemDTOS.map((item) => {
                    return (
                      <div className="border-bottom py-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center gap-10">
                            <div className="position-relative">
                              <span className="quantities badge bg-secondary text-white rounded-circle position-absolute">
                                {item.quantity}
                              </span>
                              <img src={item.productDTO.imgs[0]} alt="" />
                            </div>
                            <h4 className="title mb-0">
                              {item.productDTO.title}
                            </h4>
                          </div>
                          <div>
                            <h4 className="price mb-0">{item.price}</h4>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}

                <div className=" border-bottom d-flex align-items-center justify-content-between mt-3 pb-2">
                  <h4 className="total">Tổng cộng</h4>
                  <h5 className="total-price">
                    {cart?.cart?.data?.totalPrice}
                  </h5>
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
