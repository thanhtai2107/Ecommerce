import { Form, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../state/Category/Action";
import { addProduct } from "../../../state/Product/Action";

function NewProduct() {
  const { category } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [img, setImg] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [brand, setBrand] = useState("");
  const [categorySelected, setCategorySelected] = useState("");
  const handleImgChange = (img) => {
    const fileList = [...img.fileList];
    setImg(fileList);
  };
  const handleAddProduct = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.append("category", categorySelected);
    data.append("title", title);
    data.append("description", description);
    data.append("price", price);
    data.append("quantity", quantity);
    data.append("brand", brand);
    img.forEach((img) => {
      data.append(`imgUrl`, img.originFileObj);
    });
    console.log("category", data.getAll("category"));
    dispatch(addProduct(data));
    setTitle("");
    setDescription("");
    setPrice("");
    setQuantity("");
    setBrand("");
    setCategorySelected("");
    setImg([]);
  };

  useEffect(() => {
    dispatch(getCategory());
  }, []);
  return (
    <>
      <h2 className="add-title my-4">New Product</h2>
      <div className="new-product-wrapper p-4">
        <div className="row">
          <div className="col-4">
            <div className="new-product-image">
              <Form.Item label="Upload" valuePropName="fileList">
                <Upload
                  action="/upload.do"
                  listType="picture-card"
                  multiple={true}
                  beforeUpload={() => false}
                  onChange={handleImgChange}
                >
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload>
              </Form.Item>
            </div>
          </div>
          <div className="col-8">
            <div className="new-product-form">
              <form
                onSubmit={handleAddProduct}
                action=""
                className="d-flex flex-wrap justify-content-around gap-4"
              >
                <div className="form-input d-flex flex-column ">
                  <label htmlFor="">Tên sản phẩm</label>
                  <input
                    value={title}
                    type="text"
                    placeholder="Tên sản phẩm..."
                    name="productTitle"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-input d-flex flex-column w-40">
                  <label htmlFor="">Mô tả</label>
                  <input
                    value={description}
                    type="text"
                    placeholder="Mô tả..."
                    name="productDescription"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="form-input d-flex flex-column w-40">
                  <label htmlFor="">Giá</label>
                  <input
                    value={price}
                    type="number"
                    placeholder="Giá..."
                    name="price"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="form-input d-flex flex-column w-40">
                  <label htmlFor="">Số lượng</label>
                  <input
                    value={quantity}
                    type="number"
                    placeholder="Số lượng..."
                    name="quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <div className="form-input d-flex flex-column w-40">
                  <label htmlFor="">Thương hiệu</label>
                  <input
                    value={brand}
                    type="text"
                    placeholder="Thương hiệu..."
                    name="productBrand"
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </div>
                <div className="form-input d-flex flex-column w-40">
                  <label htmlFor="">Danh mục sản phẩm</label>
                  <select
                    name="categoryName"
                    onChange={(e) => setCategorySelected(e.target.value)}
                  >
                    <option defaultChecked selected={false}>
                      --Select Category--
                    </option>
                    {category.category &&
                      category?.category.map((category) => {
                        return (
                          <option key={category.id}>{category.name}</option>
                        );
                      })}
                  </select>
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

export default NewProduct;
