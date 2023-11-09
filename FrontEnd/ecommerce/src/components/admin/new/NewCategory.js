import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, getCategory } from "../../../state/Category/Action";
import { checkExpired } from "../../../service";
import { useNavigate } from "react-router-dom";

function NewCategory() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [category, setCategory] = useState("");
  const handleAddCategory = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("category", category);

    if (checkExpired(localStorage.getItem("jwt"))) {
      dispatch(addCategory(data));
    } else {
      navigate("/login");
    }
    setCategory("");
  };

  return (
    <>
      <h2 className="add-title my-4">Danh mục sản phẩm mới</h2>
      <div className="new-product-wrapper p-4">
        <div className="row">
          <div className="col-8">
            <div className="new-product-form">
              <form
                onSubmit={handleAddCategory}
                action=""
                className="d-flex flex-wrap justify-content-around gap-4"
              >
                <div className="form-input d-flex flex-column ">
                  <label htmlFor="">Tên danh mục</label>
                  <input
                    value={category}
                    type="text"
                    placeholder="Tên danh mục"
                    name="productTitle"
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
                <div className="form-input d-flex align-items-end justify-content-center">
                  <button type="submit">Thêm</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewCategory;
