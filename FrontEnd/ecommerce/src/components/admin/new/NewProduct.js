import { Form, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
// console.log(normFile.isArray);
function NewProduct() {
  return (
    <>
      <h2 className="add-title my-4">New Product</h2>
      <div className="new-product-wrapper p-4">
        <div className="row">
          <div className="col-4">
            <div className="new-product-image">
              <Form.Item
                label="Upload"
                valuePropName="fileList"
                // getValueFromEvent={normFile}
              >
                <Upload action="/upload.do" listType="picture-card">
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
                action=""
                className="d-flex flex-wrap justify-content-around gap-4"
              >
                <div className="form-input d-flex flex-column ">
                  <label htmlFor="">Product Name</label>
                  <input type="text" placeholder="Product Name" />
                </div>
                <div className="form-input d-flex flex-column w-40">
                  <label htmlFor="">Discription</label>
                  <input type="text" placeholder="Discription" />
                </div>
                <div className="form-input d-flex flex-column w-40">
                  <label htmlFor="">Price</label>
                  <input type="number" placeholder="Price" />
                </div>
                <div className="form-input d-flex flex-column w-40">
                  <label htmlFor="">Quantity</label>
                  <input type="number" placeholder="Quantity" />
                </div>
                <div className="form-input d-flex flex-column w-40">
                  <label htmlFor="">Category</label>
                  <select name="" id="">
                    <option value="" defaultValue={true}>
                      --Select Category--
                    </option>
                    <option value=""> Phone</option>
                    <option value=""> Camera</option>
                  </select>
                </div>
                <div className="form-input d-flex align-items-end justify-content-center">
                  <button type="submit">Add</button>
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
