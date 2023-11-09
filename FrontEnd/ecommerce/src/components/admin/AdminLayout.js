import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function AdminLayout({ children }) {
  return (
    <>
      <div className="top-wrapper border-bottom">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <Navbar />
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2 sidebar-wrapper">
              <Sidebar />
            </div>
            <div className="col-10">
              <div className="content-wrapper">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
