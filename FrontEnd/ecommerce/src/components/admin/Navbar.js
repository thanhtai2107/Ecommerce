import {
  ChatBubbleOutline,
  Language,
  List,
  NotificationsNone,
  Search,
} from "@mui/icons-material";
function Navbar() {
  return (
    <>
      <div className="navbar-main-wrapper ">
        <div className="row">
          <div className="col-2 logo d-flex align-items-center justify-content-center">
            <h2 className="mb-0">Developer</h2>
          </div>
          <div className="col-10 py-2">
            <div className="d-flex justify-content-between px-3">
              <div className="navbar-search d-flex align-items-center">
                <input type="text" placeholder="Search..." />
                <Search className="icon pe-1" />
              </div>
              <div className="navbar-items d-flex align-items-center gap-15">
                <div className="d-flex align-items-center">
                  <Language className="icon" />
                  <select className="border-0">
                    <option value="VietNam">VietNam</option>
                    <option value="English">English</option>
                  </select>
                </div>
                <div>
                  <NotificationsNone className="icon" />
                </div>
                <div>
                  <ChatBubbleOutline className="icon" />
                </div>
                <div>
                  <List className="icon" />
                </div>
                <div className="avatar">
                  <img
                    src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
