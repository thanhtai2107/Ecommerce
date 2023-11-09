import { Button } from "@mui/material";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cancelOrder, getOrdersByUser } from "../state/Order/Action";
import { DataGrid } from "@mui/x-data-grid";
function OrderHistory() {
  const columns = [
    { field: "fullname", headerName: "Tên khách hàng", width: 150 },

    { field: "email", headerName: "Email", width: 130 },
    { field: "phone", headerName: "Số điện thoại", width: 100 },
    {
      field: "shippingAddress",
      headerName: "Địa chỉ",
      width: 200,
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
                onClick={() => navigate(`/order/${params.row.id}`)}
              >
                Xem
              </Button>
            </>
          );
        }
      },
    },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  console.log(auth?.jwt?.user?.id);
  const { order } = useSelector((store) => store);
  console.log("user order", order.orders);

  const handleCancel = (orderId) => {
    dispatch(cancelOrder(orderId));
    dispatch(getOrdersByUser(auth?.jwt?.user?.id));
  };
  useEffect(() => {
    const data = auth?.jwt?.user?.id;
    dispatch(getOrdersByUser(data));
  }, []);
  return (
    <>
      <Meta title="Blog"></Meta>
      <BreadCrumb title="Lịch sử đơn hàng"></BreadCrumb>
      <div className="home-wrapper-2 py-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              {order?.orders.length > 0 ? (
                <>
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
                </>
              ) : (
                <>
                  <h4>Không có đơn hàng nào</h4>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderHistory;
