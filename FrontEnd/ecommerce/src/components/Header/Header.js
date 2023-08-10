import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
function Header() {
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
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search product..."
                  aria-label="Search product..."
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <span class="input-group-text h-100" id="basic-addon2">
                    <BsSearch />
                  </span>
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
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img alt="wishlist" src="images/wishlist.svg" />
                    <p>
                      Favourite <br /> WishList
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img alt="user" src="images/user.svg" />
                    <p>
                      Login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
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
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-10 align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img alt="" src="images/menu.svg" />
                      <span>Show Categories</span>
                    </button>
                    <ul class="dropdown-menu">
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
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Our store</NavLink>
                    <NavLink to="/">Blog</NavLink>
                    <NavLink to="/">Contact</NavLink>
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
