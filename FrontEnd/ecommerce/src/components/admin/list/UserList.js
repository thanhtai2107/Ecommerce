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
import DeleteIcon from "@mui/icons-material/Delete";
import { getUsers } from "../../../state/User/Action";
function UserList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store);

  const columns = [
    { field: "fullname", headerName: "Họ và tên", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Số điện thoại", width: 130 },
    { field: "address", headerName: "Địa chỉ", width: 230 },
    { field: "role", headerName: "Role", width: 90 },

    // {
    //   field: "action",
    //   headerName: "Action",
    //   description: "Action",
    //   sortable: false,
    //   width: 160,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <div className="cellAction">
    //           <Button
    //             color="success"
    //             size="small"
    //             variant="contained"
    //             startIcon={<EditIcon />}
    //             onClick={() =>
    //               navigate(`/admin/updateproduct/${params.row.id}`)
    //             }
    //           >
    //             Update
    //           </Button>

    //           <Button
    //             color="error"
    //             variant="contained"
    //             size="small"
    //             startIcon={<DeleteIcon />}
    //             onClick={(e) => handleDelete(params.row.id)}
    //           >
    //             Delete
    //           </Button>
    //         </div>
    //       </>
    //     );
    //   },
    // },
  ];
  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
    dispatch(findAllProduct());
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (user?.users?.length > 0) {
    return (
      <>
        <div className="product-list-wrapper">
          <div>
            <div className="py-4">
              <h5>Danh sách người dùng</h5>
            </div>
            <div className="product-list position-relative">
              <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={user.users}
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
            <Link to="/admin/addProduct">
              <Button variant="contained">Thêm sản phẩm</Button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default UserList;
