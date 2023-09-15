import { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";

function OurStore() {
  const [grid, setGrid] = useState(4);
  return (
    <>
      <Meta title="OurStore"></Meta>
      <BreadCrumb title="Our Store"></BreadCrumb>
      <div className="store-wrapper home-wrapper-2  py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div className="ps-0">
                  <ul>
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availablity</h5>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      In Stock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Out of Stock (0)
                    </label>
                  </div>
                </div>
                <div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                      />
                      <label for="floatingInput">From</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput1"
                      />
                      <label for="floatingInput1">To</label>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="sub-title">Color</h5>
                  <div>
                    <ul className="colors">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        M (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        S (1)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tag</h3>
                <div>
                  <div className="product-tag d-flex flex-wrap  gap-10 align-items-center">
                    <span className="badge bg-light text-secondary rounded-2 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-2 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-2 py-2 px-3">
                      Camera
                    </span>
                    <span className="badge bg-light text-secondary rounded-2 py-2 px-3">
                      TV
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="" style={{ width: "100px" }}>
                      Sort by:
                    </p>
                    <select className="form-control form-select" name="" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">
                        Best selling
                      </option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-descending">
                        Price, high to low
                      </option>
                      <option value="created-ascending">
                        Date, old to new
                      </option>
                      <option value="created-descending">
                        Date, new to old
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="total-product">21 products</p>
                    <div className="d-flex gap-10 align-align-items-center grid">
                      <img
                        onClick={() => setGrid(3)}
                        className="img-fluid d-block"
                        src="images/gr4.svg"
                        alt="grid"
                      />
                      <img
                        className="img-fluid d-block"
                        src="images/gr3.svg"
                        alt="grid"
                        onClick={() => setGrid(4)}
                      />
                      <img
                        className="img-fluid d-block"
                        src="images/gr2.svg"
                        alt="grid"
                        onClick={() => setGrid(6)}
                      />
                      <img
                        className="img-fluid d-block"
                        src="images/gr.svg"
                        alt="grid"
                        onClick={() => setGrid(12)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list py-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStore;