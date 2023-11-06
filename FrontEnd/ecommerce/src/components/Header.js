import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../state/auth/Action";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useEffect, useState } from "react";
import { getCategory } from "../state/Category/Action";
import { store } from "../state/store";
function Header() {
  const { auth } = useSelector((store) => store);
  const { category } = useSelector((store) => store);
  const [title, setTitle] = useState("");
  console.log(category);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    dispatch(getCategory());
  }, []);
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xl">
          <div className="row">
            <div className="col-6">
              <p className=" text-white m-0">
                Free shipping over $100 and free return
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white m-0">
                Hotline: <a href="0123456789"> 012345679</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper align-items-center py-3">
        <div className="container-xl">
          <div className="row">
            <div className="col-2">
              <h2>
                <Link className="text-white">Developer</Link>
              </h2>
            </div>
            <div className="col-5 d-flex align-items-center">
              <div className="input-group">
                <input
                  value={title}
                  type="text"
                  className="form-control"
                  placeholder="Tìm kiếm sản phẩm..."
                  aria-label="Search product..."
                  aria-describedby="basic-addon2"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <div className="input-group-append">
                  <Link
                    style={{ height: "38px" }}
                    to={{
                      pathname: "/search",
                      search: `?page=1&title=${title}`,
                    }}
                  >
                    <span className="input-group-text h-100" id="basic-addon2">
                      <BsSearch />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-link d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white text-">
                    <img alt="compare" src="images/compare.svg" />
                    <p>
                      Compare <br /> Product
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img alt="wishlist" src="images/wishlist.svg" />
                    <p>
                      Favourite <br /> WishList
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white user-profile position-relative"
                  >
                    <img alt="user" src="images/user.svg" />
                    {auth.jwt ? (
                      <div>
                        <p>
                          Hello <br /> {auth.jwt.user.fullname}
                        </p>
                        <ul className="d-none position-absolute user-function">
                          <li>Thông tin cá nhân</li>
                          <li>Thay đổi mật khẩu</li>
                          <li>Lịch sử đơn hàng</li>
                          <li onClick={handleLogout}>Đăng xuất</li>
                        </ul>
                      </div>
                    ) : (
                      <p>
                        Đăng nhập <br /> Tài khoản
                      </p>
                    )}
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img alt="cart" src="images/cart.svg" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-black">0</span>
                      <p>$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-10 align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img alt="" src="images/menu.svg" />
                      <span>Show Categories</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-link">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="menu-link-item" to="/">
                      TRANG CHỦ
                    </NavLink>
                    <p className="store position-relative menu-link-item">
                      CỬA HÀNG
                      <ArrowDropDownIcon />
                      <ul className="category position-absolute">
                        {category?.category?.map((category) => {
                          return (
                            <NavLink
                              to={{
                                pathname: "/product",
                                search: `?page=1&category=${category.name}`,
                              }}
                            >
                              <li>{category.name}</li>
                            </NavLink>
                          );
                        })}
                      </ul>
                    </p>
                    <NavLink className="menu-link-item" to="/blog">
                      BLOG
                    </NavLink>
                    <NavLink className="menu-link-item" to="/contact">
                      LIÊN HỆ
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
