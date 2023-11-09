import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  findAllProduct,
  findProductByTitle,
} from "../../../state/Product/Action";
import EditIcon from "@mui/icons-material/Edit";
function ProductList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "imgs",
      headerName: "Hình ảnh",
      width: 70,
      renderCell: (params) => {
        return (
          <div>
            <img
              className="img-fluid"
              src={params.row.imgs[0]}
              alt="img"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
          </div>
        );
      },
    },
    { field: "title", headerName: "Tên sản phẩm", width: 130 },
    { field: "description", headerName: "Mô tả", width: 130 },
    {
      field: "price",
      headerName: "Giá",
      type: "number",
      width: 90,
    },
    {
      field: "quantity",
      headerName: "Số lượng",
      type: "number",
      width: 90,
    },
    {
      field: "sold",
      headerName: "Đã bán",
      type: "number",
      width: 90,
    },
    {
      field: "cate",
      headerName: "Danh mục",
      description: "This column has a value getter and is not sortable.",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <span>{params.row.category?.name}</span>
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      description: "Action",
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <div className="cellAction">
              <Button
                color="success"
                size="small"
                variant="contained"
                startIcon={<EditIcon />}
                onClick={() =>
                  navigate(`/admin/updateproduct/${params.row.id}`)
                }
              >
                Update
              </Button>
            </div>
          </>
        );
      },
    },
  ];
  useEffect(() => {
    dispatch(findAllProduct());
  }, []);

  if (product?.products?.length > 0) {
    return (
      <>
        <div className="product-list-wrapper">
          <div>
            <div className="py-4">
              <Link to="/admin/addProduct">
                <Button variant="contained">Thêm sản phẩm</Button>
              </Link>
            </div>
            <div className="product-list position-relative">
              <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={product.products}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="product-list-wrapper py-4">
          <div>
            <Link to="/admin/addProduct">
              <Button variant="contained">Thêm sản phẩm</Button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default ProductList;
