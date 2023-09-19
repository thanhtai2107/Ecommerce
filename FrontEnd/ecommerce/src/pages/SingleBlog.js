import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
function SingleBlog() {
  return (
    <>
      <Meta title="Single Blog"></Meta>
      <BreadCrumb title="Blog title name"></BreadCrumb>
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog">
                <Link to="/blog" className="d-flex align-items-center gap-1">
                  <BiArrowBack />
                  Back to Blog
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  src="images/blog-1.jpg"
                  className="img-fluid w-100 my-0"
                  alt="imageblog"
                />
                <p>
                  You’re only as good as your last collection, which is an
                  enormous pressure. I think there is something about luxury –
                  it’s not something people need, but it’s what they want. It
                  really pulls at their heart. I have a fantastic relationship
                  with money.Scelerisque sociosqu ullamcorper urna nisl mollis
                  vestibulum pretium commodo inceptos cum condimentum placerat
                  diam venenatis blandit hac eget dis lacus a parturient a
                  accumsan nisl ante vestibulum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
