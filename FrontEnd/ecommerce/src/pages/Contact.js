import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
function Contact() {
  return (
    <>
      <Meta title="Contact Us"></Meta>
      <BreadCrumb title="Contact Us"></BreadCrumb>
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <iFrame
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7836.429201809827!2d106.78738430142401!3d10.871275917221631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276398969f7b%3A0x9672b7efd0893fc4!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOw7RuZyBMw6JtIFRQLiBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1694791898482!5m2!1svi!2s"
                width="600"
                height="450"
                className="border-0 w-100"
                // style="border:0;"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iFrame>
            </div>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone number"
                    />
                  </div>
                  <div>
                    <textarea
                      cols={4}
                      className="form-control"
                      placeholder="Comment"
                    />
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex align-items-center gap-10">
                      <AiOutlineHome className="fs-5" />
                      <address className="m-0">Linh Trung, Thu Duc</address>
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-10">
                      <BiPhoneCall className="fs-5" />
                      <p>012345678</p>
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-10">
                      <AiOutlineMail className="fs-5" />
                      <p>developer@gmail.com</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
