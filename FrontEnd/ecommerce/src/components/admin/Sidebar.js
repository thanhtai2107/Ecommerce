import {
  AccountBox,
  AccountCircle,
  Category,
  DashboardCustomize,
  Logout,
  ProductionQuantityLimits,
  Reorder,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <div className="sidebar-main-wrapper ps-1">
        <div className="py-4">
          <div className="mb-2">
            <h6>Main</h6>
            <div>
              <Link className="item-wrapper d-flex align-items-center gap-1 ps-2 py-1 mt-2 text-dark">
                <DashboardCustomize className="icon" />
                <p>Dashboard</p>
              </Link>
            </div>
          </div>
          <div className="mb-2">
            <h6>List</h6>
            <div className="mt-2">
              <div>
                <Link className="item-wrapper d-flex align-items-center gap-1 ps-2 py-1 text-dark">
                  <AccountCircle className="icon" />
                  <p>Quản lí người dùng</p>
                </Link>
              </div>
              <div>
                <Link
                  to="/admin/productlist"
                  className="item-wrapper d-flex align-items-center gap-1 ps-2 py-1 text-dark"
                >
                  <ProductionQuantityLimits className="icon" />
                  <p>Quản lí sản phẩm</p>
                </Link>
              </div>
              <div>
                <Link className="item-wrapper d-flex align-items-center gap-1 ps-2 py-1 text-dark">
                  <Reorder className="icon" />
                  <p>Quản lí đơn hàng</p>
                </Link>
              </div>
              <div>
                <Link className="item-wrapper d-flex align-items-center gap-1 ps-2 py-1 text-dark">
                  <Category className="icon" />
                  <p>Quản lí danh mục</p>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h6>Service</h6>
            <div className="mt-2">
              <div>
                <Link className="item-wrapper d-flex align-items-center gap-1 ps-2 py-1 text-dark">
                  <AccountBox className="icon" />
                  <p>Thông tin cá nhân</p>
                </Link>
              </div>
              <div>
                <Link className="item-wrapper d-flex align-items-center gap-1 ps-2 py-1 text-dark">
                  <Logout className="icon" />
                  <p>Đăng xuất</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
