import BlogCard from "../components/BlogCard";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
function Blog() {
  return (
    <>
      <Meta title="Blog"></Meta>
      <BreadCrumb title="Blog"></BreadCrumb>
      <div className="container-xl">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div className="ps-0">
                <ul>
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
