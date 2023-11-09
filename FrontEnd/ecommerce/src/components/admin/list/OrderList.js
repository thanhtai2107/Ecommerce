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
import {
  cancelOrder,
  confirmOrder,
  getOrders,
} from "../../../state/Order/Action";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
function OrderList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);
  console.log(order?.orders);

  const columns = [
    { field: "fullname", headerName: "Tên khách hàng", width: 130 },

    { field: "email", headerName: "Email", width: 130 },
    { field: "phone", headerName: "Số điện thoại", width: 70 },
    {
      field: "shippingAddress",
      headerName: "Địa chỉ",
      width: 150,
    },
    {
      field: "localDateTime",
      headerName: "Ngày tạo",
      width: 130,
    },
    {
      field: "totalPrice",
      headerName: "Tổng giá",
      type: "number",
      width: 90,
    },
    {
      field: "orderStatus",
      headerName: "Trạng thái",
      width: 90,
    },

    {
      field: "action",
      headerName: "Action",
      description: "Action",
      sortable: false,
      width: 160,
      renderCell: (params) => {
        if (params.row.orderStatus === "PENDING") {
          return (
            <div className="cellAction">
              <Button
                className="m-1"
                color="success"
                size="small"
                variant="contained"
                startIcon={<CheckIcon />}
                onClick={() => handleConfirm(params.row.id)}
              >
                Xác nhận
              </Button>

              <Button
                className="m-1"
                color="error"
                variant="contained"
                size="small"
                startIcon={<CloseIcon />}
                onClick={() => handleCancel(params.row.id)}
              >
                Hủy
              </Button>

              <Button
                className="m-1"
                size="small"
                variant="contained"
                startIcon={<VisibilityIcon />}
                onClick={() => navigate(`/admin/orderlist/${params.row.id}`)}
              >
                Xem
              </Button>
            </div>
          );
        } else {
          return (
            <>
              <Button
                className="m-1"
                size="small"
                variant="contained"
                startIcon={<VisibilityIcon />}
                onClick={() => navigate(`/admin/orderlist/${params.row.id}`)}
              >
                Xem
              </Button>
            </>
          );
        }
      },
    },
  ];
  const handleConfirm = (orderId) => {
    dispatch(confirmOrder(orderId));
    dispatch(getOrders());
  };
  const handleCancel = (orderId) => {
    dispatch(cancelOrder(orderId));
    dispatch(getOrders());
  };
  useEffect(() => {
    dispatch(getOrders());
  }, []);

  if (order?.orders?.length > 0) {
    return (
      <>
        <div className="product-list-wrapper">
          <div>
            <div className="py-4">
              <h5>Danh sách đơn hàng</h5>
            </div>
            <div className="product-list position-relative">
              <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={order.orders}
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
            <h5>Danh sách đơn hàng</h5>
          </div>
        </div>
      </>
    );
  }
}

export default OrderList;
