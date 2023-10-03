import {
  AccountBox,
  AccountCircle,
  Category,
  DashboardCustomize,
  Logout,
  ProductionQuantityLimits,
  Reorder,
} from "@mui/icons-material";
function Sidebar() {
  return (
    <>
      <div className="sidebar-main-wrapper ps-1">
        <div className="py-4">
          <div className="mb-2">
            <h6>Main</h6>
            <div className="item-wrapper d-flex align-items-center gap-1 ps-2 py-1 mt-2">
              <DashboardCustomize className="icon" />
              <p>Dashboard</p>
            </div>
          </div>
          <div className="mb-2">
            <h6>List</h6>
            <div className="mt-2">
              <div className="item-wrapper d-flex align-items-center gap-1 ps-2 py-1">
                <AccountCircle className="icon" />
                <p>User</p>
              </div>
              <div className="item-wrapper d-flex align-items-center gap-1 ps-2 py-1">
                <ProductionQuantityLimits className="icon" />
                <p>Product</p>
              </div>
              <div className="item-wrapper d-flex align-items-center gap-1 ps-2 py-1">
                <Reorder className="icon" />
                <p>Order</p>
              </div>
              <div className="item-wrapper d-flex align-items-center gap-1 ps-2 py-1">
                <Category className="icon" />
                <p>Categories</p>
              </div>
            </div>
          </div>
          <div>
            <h6>Service</h6>
            <div className="mt-2">
              <div className="item-wrapper d-flex align-items-center gap-1 ps-2 py-1">
                <AccountBox className="icon" />
                <p>Profile</p>
              </div>
              <div className="item-wrapper d-flex align-items-center gap-1 ps-2 py-1">
                <Logout className="icon" />
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
