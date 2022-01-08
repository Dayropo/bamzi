import React from "react"
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa"
import "../styles/footer.module.css"

export default function Footer() {
  return (
    <footer className="text-white text-start mt-5">
      <div
        className="bg-primary align-items-center rounded row w-75 mx-auto py-4 px-2"
        style={{ marginBottom: -60, zIndex: 10, position: "relative" }}
      >
        <div className="col-md-6">
          <h5>Contact Us</h5>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="col-md-6">
          <div className="d-flex bg-white align-items-center rounded-pill p-2">
            <form>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control rounded-pill border-0"
                  placeholder="Email here"
                />
              </div>
            </form>
            <button className="btn btn-warning rounded-pill my-1 ms-auto py-2 px-4 text-white">
              Send
            </button>
          </div>
        </div>
      </div>
      <div
        className="container-fluid p-4 mt-1"
        style={{ backgroundColor: "rgba(48, 48, 48, 255)" }}
      >
        {/** contact us */}

        <section className="container mt-5">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <a href="/">
                <img
                  src={require("../assets/BAMZI.png")}
                  width={"60px"}
                  alt="bamzi"
                />
              </a>

              <div className="d-flex mt-3 pe-5">
                <a
                  href="#!"
                  className="btn btn-outline-secondary rounded-circle"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#!"
                  className="btn btn-outline-secondary rounded-circle ms-2"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#!"
                  className="btn btn-outline-secondary rounded-circle ms-2"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#!"
                  className="btn btn-outline-secondary rounded-circle ms-2"
                >
                  <FaPinterest />
                </a>
              </div>

              <div className="row row-cols-4 gx-0 gy-2 pe-5 mt-3">
                <div className="col">
                  <img src={require("../assets/D1-image01.png")} alt="" />
                </div>
                <div className="col">
                  <img src={require("../assets/D1-image02.png")} alt="" />
                </div>
                <div className="col">
                  <img src={require("../assets/D1-image03.png")} alt="" />
                </div>
                <div className="col">
                  <img src={require("../assets/D1-image04.png")} alt="" />
                </div>
                <div className="col">
                  <img src={require("../assets/D1-image05.png")} alt="" />
                </div>
                <div className="col">
                  <img src={require("../assets/D1-image06.png")} alt="" />
                </div>
                <div className="col">
                  <img src={require("../assets/D1-image07.png")} alt="" />
                </div>
                <div className="col">
                  <img src={require("../assets/D1-image08.png")} alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-6 mb-4 mb-lg-0">
              <h6>Links</h6>

              <ul className="list-unstyled mt-3 mb-0">
                <li>
                  <a href="#!" className="text-secondary text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-secondary text-decoration-none">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-secondary text-decoration-none">
                    Download
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-secondary text-decoration-none">
                    About
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-secondary text-decoration-none">
                    Service
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-6 mb-4 mb-lg-0">
              <h6>Support</h6>

              <ul className="list-unstyled mt-3 mb-0">
                <li>
                  <a href="#!" className="text-secondary text-decoration-none">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-secondary text-decoration-none">
                    How to
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-secondary text-decoration-none">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-secondary text-decoration-none">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-secondary text-decoration-none">
                    Reporting
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-6 mb-4 mb-lg-0">
              <h6>Contact Us</h6>

              <ul className="list-unstyled mt-3 mb-0">
                <li>
                  <span className="text-secondary">+880 1234 5678</span>
                </li>
                <li>
                  <span className="text-secondary">example@email.com</span>
                </li>
                <li>
                  <span className="text-secondary">Rangpur City</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
}
