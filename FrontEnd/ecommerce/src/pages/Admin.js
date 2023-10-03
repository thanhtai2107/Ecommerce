import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  AccountBalanceOutlined,
  AccountCircleOutlined,
  KeyboardArrowUp,
  MoreVert,
  PaidOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import Chart from "../components/admin/Chart";
function Admin() {
  return (
    <>
      <div className="admin-main-wrapper py-4">
        <div className="widgets-wrapper">
          <div className="d-flex gap-10 justify-content-around">
            <div className="widget user">
              <div className="d-flex justify-content-between">
                <h4>USER</h4>
                <div className="d-flex gap-1">
                  <KeyboardArrowUp />
                  <p>20%</p>
                </div>
              </div>

              <p className="count">100</p>
              <div className="d-flex justify-content-between">
                <Link>View all users</Link>
                <AccountCircleOutlined className="icon" />
              </div>
            </div>
            <div className="widget order">
              <div className="d-flex justify-content-between">
                <h4>ORDER</h4>
                <div className="d-flex gap-1">
                  <KeyboardArrowUp />
                  <p>20%</p>
                </div>
              </div>
              <p className="count">100</p>
              <div className="d-flex justify-content-between">
                <Link>View all users</Link>
                <ShoppingCartOutlined className="icon" />
              </div>
            </div>
            <div className="widget earning">
              <div className="d-flex justify-content-between">
                <h4>EARNING</h4>
                <div className="d-flex gap-1">
                  <KeyboardArrowUp />
                  <p>20%</p>
                </div>
              </div>
              <p className="count">$ 100</p>
              <div className="d-flex justify-content-between">
                <Link>View all users</Link>
                <PaidOutlined className="icon" />
              </div>
            </div>
            <div className="widget balance">
              <div className="d-flex justify-content-between">
                <h4>BALANCE</h4>
                <div className="d-flex gap-1">
                  <KeyboardArrowUp />
                  <p>20%</p>
                </div>
              </div>
              <p className="count">$ 100</p>
              <div className="d-flex justify-content-between">
                <Link>View all users</Link>
                <AccountBalanceOutlined className="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="chart-wrapper py-4">
          <div className="row">
            <div className="col-4">
              <div className="left-chart">
                <div>
                  <div className="d-flex justify-content-between">
                    <h6>Total Revenue</h6>
                    <MoreVert />
                  </div>
                  <div className="circular-progressbar my-4 w-100 d-flex justify-content-center">
                    <CircularProgressbar value={70} text="70%" />
                  </div>
                  <p className="text-center">Total sale made today</p>
                  <h4 className="text-center">$ 500</h4>
                  <h6 className="text-center my-3">
                    Previous transactions progressing. Last payments may not
                    included
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="right-chart">
                <Chart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
