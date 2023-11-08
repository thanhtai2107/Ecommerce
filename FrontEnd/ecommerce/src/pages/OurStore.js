import { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import {
  NavLink,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../state/Product/Action";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { BsSearch } from "react-icons/bs";

const filters = [
  { id: 1, value: "Giá giảm dần", field: "price", order: "DESC" },
  { id: 2, value: "Giá tăng dần", field: "price", order: "ASC" },
  { id: 3, value: "Theo tên A-Z", field: "title", order: "ASC" },
  { id: 4, value: "Theo tên Z-A", field: "title", order: "DESC" },
];
function OurStore() {
  const [grid, setGrid] = useState(4);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store);
  const { category } = useSelector((store) => store);

  // const decodedQueryString = decodeURIComponent(location.search);
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get("title");
  const currentPage = Number(queryParams.get("page"));
  const sort = queryParams.get("sort");
  const direction = queryParams.get("direction");
  const category2 = queryParams.get("category");
  const handleCategoryChange = (e) => {
    queryParams.set("category", e);
    navigate({ search: `?${queryParams}` });
  };
  const handleTitleChange = (e) => {
    console.log(e);
    if (queryParams.toString().includes("title")) {
      queryParams.set("title", e);
      queryParams.set("page", 1);
    } else if (e === "") {
      queryParams.delete("title");
      queryParams.set("page", 1);
    } else {
      queryParams.append("title", e);
    }
    navigate({ search: `?${queryParams}` });
  };
  const handlePageChange = (e, page) => {
    queryParams.append("page", page);
    queryParams.set("page", page);
    navigate({ search: queryParams.toString() });
    console.log(page);
  };
  const handlefilter = (field, order) => {
    if (queryParams.toString().includes("sort")) {
      queryParams.set("sort", field);
      queryParams.set("page", 1);
    } else {
      queryParams.append("sort", field);
      queryParams.set("page", 1);
    }
    if (queryParams.toString().includes("direction")) {
      queryParams.set("direction", order);
    } else {
      queryParams.append("direction", order);
    }
    navigate({ search: `?${queryParams}` });
  };

  useEffect(() => {
    const data = {
      title: title === null ? "" : title,
      category: category2,
      size: 8,
      page: currentPage - 1,
      sortList: sort === null ? "" : sort,
      sortDirection: direction === null ? "" : direction,
    };
    console.log(data);
    dispatch(findProducts(data));
  }, [currentPage, sort, direction, title, category2]);
  return (
    <>
      <Meta title="OurStore"></Meta>
      <BreadCrumb title="Our Store"></BreadCrumb>
      <div className="store-wrapper home-wrapper-2  py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Tìm theo danh mục</h3>
                <div className="ps-0">
                  <ul className="d-flex flex-column">
                    {category?.category?.map((category) => {
                      return (
                        <NavLink
                          onChange={(e) => handleCategoryChange(e.target.value)}
                          style={{ color: "#777777" }}
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
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Bộ lọc</h3>
                <div>
                  <h5 className="sub-title">Lọc theo tên</h5>
                  <div className="input-group">
                    <input
                      style={{ fontSize: "14px" }}
                      type="text"
                      className="form-control"
                      placeholder="Lọc theo tên..."
                      onChange={(e) => handleTitleChange(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <h5 className="sub-title">Lọc theo:</h5>
                  {filters.map((filter) => {
                    return (
                      <div className="form-check" key={filter.id}>
                        <input
                          className="form-check-input"
                          type="radio"
                          value={filter.value}
                          id={filter.id}
                          name="filter"
                          onChange={() =>
                            handlefilter(filter.field, filter.order)
                          }
                        />
                        <label className="form-check-label" htmlFor={filter.id}>
                          {filter.value}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="" style={{ width: "160px" }}>
                      Tổng: <b>{product?.products?.totalElements}</b> sản phẩm
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-10">
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
                  {product.products.content != null ? (
                    product.products.content.map((item) => {
                      return (
                        <ProductCard key={item.id} grid={grid} product={item} />
                      );
                    })
                  ) : (
                    <div>Không có sản phẩm</div>
                  )}
                </div>
              </div>
              <div className="pagination d-flex justify-content-center">
                <Stack spacing={2}>
                  <Pagination
                    page={currentPage}
                    count={product?.products?.totalPages}
                    variant="outlined"
                    color="primary"
                    onChange={(e, page) =>
                      handlePageChange(e.target.value, page)
                    }
                  />
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStore;
