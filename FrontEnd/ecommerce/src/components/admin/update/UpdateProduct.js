function UpdateProduct() {
  return (
    <>
      <h2 className="add-title my-4">New Product</h2>
      <div className="new-product-wrapper p-4">
        <div className="row">
          <div className="col-4">
            <div className="new-product-image d-flex align-items-center justify-content-center">
              <img
                className="img-fluid w-50 h-50 rounded-circle"
                src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                alt=""
              />
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

export default UpdateProduct;
