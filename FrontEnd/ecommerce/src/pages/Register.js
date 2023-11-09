import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { useDispatch } from "react-redux";
import { register } from "../state/auth/Action";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);
  const [provinceCode, setProvinceCode] = useState();
  const [districtCode, setDistrictCode] = useState();
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const BASE_ADDRESS_URL = "https://provinces.open-api.vn/api";
  const handleRegister = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const userData = {
      fullname: data.get("fullname"),
      email: data.get("email"),
      password: data.get("password"),
      // address: {
      //   street: data.get("street"),
      //   ward: selectedWard,
      //   district: selectedDistrict,
      //   province: selectedProvince,
      // },
      phone: data.get("phone"),
    };
    dispatch(register(userData));
    if (userData) {
      navigate("/login");
    }

    console.log(userData);
  };
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
      <Meta title="Tạo tài khoản"></Meta>
      <BreadCrumb title="Tạo tài khoản"></BreadCrumb>
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="login-form">
                <h3 className="text-center">Tạo tài khoản mới</h3>
                <form action="" onSubmit={handleRegister} className="py-2">
                  <div className="py-2">
                    <input
                      type="text"
                      placeholder="Họ và tên"
                      className="form-control"
                      id="fullname"
                      name="fullname"
                    />
                  </div>

                  <div>
                    <input
                      type="password"
                      placeholder="Mật khẩu"
                      className="form-control"
                      id="password"
                      name="password"
                    />
                  </div>

                  <div className="py-2">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Số điện thoại"
                      className="form-control"
                      id="phone"
                      name="phone"
                    />
                  </div>

                  {/* <div className="flex-grow-1">
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
                          <option value={province.name}>{province.name}</option>
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
                          <option value={district.name}>{district.name}</option>
                        );
                      })}
                    </select>
                  </div>

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
                        return <option value={ward.name}>{ward.name}</option>;
                      })}
                    </select>
                  </div>

                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Số nhà, đường, khu phố"
                      name="street"
                    />
                  </div> */}

                  <div className="d-flex gap-10 justify-content-center align-items-center mt-3">
                    <button type="submit" className="button border-0">
                      Đăng kí
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
