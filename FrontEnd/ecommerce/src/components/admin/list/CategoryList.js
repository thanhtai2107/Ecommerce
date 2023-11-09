import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import { getCategory } from "../../../state/Category/Action";
function CategoryList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { category } = useSelector((store) => store);
  console.log("category", category);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },

    { field: "name", headerName: "Tên danh mục sản phẩm", width: 230 },

    {
      field: "action",
      headerName: "Action",
      description: "Action",
      sortable: false,
      width: 200,
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
                  navigate(`/admin/updatecategory/${params.row.id}`)
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
    dispatch(getCategory());
  }, []);

  if (category?.category?.length > 0) {
    return (
      <>
        <div className="product-list-wrapper">
          <div>
            <div className="py-4">
              <Link to="/admin/addCategory">
                <Button variant="contained">Thêm danh mục sản phẩm</Button>
              </Link>
            </div>
            <div className="product-list position-relative">
              <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={category.category}
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
        <div className="product-list-wrapper">
          <div>
            <Link to="/admin/addCategory">
              <Button variant="contained">Thêm danh mục sản phẩm</Button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default CategoryList;
