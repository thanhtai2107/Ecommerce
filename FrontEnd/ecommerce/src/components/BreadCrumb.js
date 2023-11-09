import { Link } from "react-router-dom";
function BreadCrumb(props) {
  const { title } = props;
  return (
    <div className="breadcrumb py-4 mb-0">
      <div className="container-xl">
        <div className="row">
          <div className="col-12">
            <p className="text-center">
              <Link to="/" className="text-dark">
                Trang chủ &nbsp;
              </Link>
              / {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreadCrumb;
