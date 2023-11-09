import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  getCategory,
  getCategoryById,
  updateCategory,
} from "../../../state/Category/Action";
import { checkExpired } from "../../../service";
import { useNavigate, useParams } from "react-router-dom";

function UpdateCategory() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const { category } = useSelector((store) => store);
  const categoryData = category.categoryById;
  const [categorys, setCategorys] = useState("");
  const handleUpdateCategory = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("category", categorys);

    if (checkExpired(localStorage.getItem("jwt"))) {
      dispatch(updateCategory(categoryId, data));
      dispatch(getCategoryById(categoryId));
    } else {
      navigate("/login");
    }
    setCategorys("");
  };
  useEffect(() => {
    setCategorys(categoryData?.name);
  }, [categoryData]);
  useEffect(() => {
    dispatch(getCategoryById(categoryId));
  }, []);
  return (
    <>
      <h2 className="add-title my-4">Cập nhật danh mục sản phẩm</h2>
      <div className="new-product-wrapper p-4">
        <div className="row">
          <div className="col-8">
            <div className="new-product-form">
              <form
                onSubmit={handleUpdateCategory}
                action=""
                className="d-flex flex-wrap justify-content-around gap-4"
              >
                <div className="form-input d-flex flex-column ">
                  <label htmlFor="">Tên danh mục</label>
                  <input
                    value={categorys}
                    type="text"
                    placeholder="Tên danh mục"
                    name="productTitle"
                    onChange={(e) => setCategorys(e.target.value)}
                  />
                </div>
                <div className="form-input d-flex align-items-end justify-content-center">
                  <button type="submit">Cập nhật</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateCategory;
