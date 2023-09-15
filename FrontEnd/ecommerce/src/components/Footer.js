import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex align-items-center gap-10">
                <img src="images/newsletter.png" alt="newsletter" />
                <h4 className="text-white m-0">Sign up for Newsletter</h4>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <span class="input-group-text h-100" id="basic-addon2">
                    Subscribe
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xl">
          <div className="row">
            <div className="col-4">
              <h4 className="mb-4 text-white">Contact Us</h4>
              <div className="footer-links d-flex flex-column">
                <address className="text-white py-2 m-1">
                  Linh Trung-Thu Duc-TP Ho Chi Minh
                </address>
                <Link className="m-1 text-white py-2">+0123456789</Link>
                <Link className="m-1 text-white py-2">developer@gmail.com</Link>
                <div className="social-icons d-flex gap-15 py-2 m-1">
                  <Link>
                    <BsLinkedin className="text-white" />
                  </Link>
                  <Link>
                    <BsGithub className="text-white" />
                  </Link>
                  <Link>
                    <BsYoutube className="text-white" />
                  </Link>
                  <Link>
                    <BsInstagram className="text-white" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-4 text-white">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 m-1 ">Privacy Policy</Link>
                <Link className="text-white py-2 m-1 ">Refund Policy</Link>
                <Link className="text-white py-2 m-1 ">Shipping Policy</Link>
                <Link className="text-white py-2 m-1 ">Term & Policy</Link>
                <Link className="text-white py-2 m-1 ">Blog</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-4 text-white">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 m-1 ">About</Link>
                <Link className="text-white py-2 m-1 ">Faq</Link>
                <Link className="text-white py-2 m-1 ">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="mb-4 text-white">QuickLinks</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 m-1 ">Laptop</Link>
                <Link className="text-white py-2 m-1 ">Headphone</Link>
                <Link className="text-white py-2 m-1 ">Table</Link>
                <Link className="text-white py-2 m-1 ">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}: Powered by Developer
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
