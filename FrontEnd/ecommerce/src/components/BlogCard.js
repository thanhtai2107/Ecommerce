import { Link } from "react-router-dom";
function BlogCard() {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img
          className="img-fluid w-100"
          src="images/blog-1.jpg"
          alt="blog"
        ></img>
      </div>
      <div className="card-content">
        <p className="data">1 Dec, 2022</p>
        <h5 className="title">A beautiful day</h5>
        <p className="desc">
          Lorem ipsum dolor sit amet consecteture adipisicing elit. Atque
          quaerat accusumus official
        </p>
        <Link to="/blog/:id" className="button">
          Read more
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
