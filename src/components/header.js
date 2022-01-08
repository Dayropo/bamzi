import React from "react"
import { IoIosCart, IoIosHeartEmpty } from "react-icons/io"

export default function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-light shadow-sm">
      <div className="container-lg">
        <a href="/" className="navbar-brand">
          <img
            src={require("../assets/BAMZI.png")}
            width={"60px"}
            alt="bamzi"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse align-center" id="main-nav">
          <ul className="navbar-nav ms-5">
            <li className="nav-item">
              <a href="#!" className="nav-link fw-bold">
                Products
              </a>
            </li>
            <li className="nav-item ms-4">
              <a href="#!" className="nav-link fw-bold">
                Stores
              </a>
            </li>
          </ul>
          <form className="ms-4 w-25">
            <div className="input-group">
              <input
                type="search"
                className="form-control rounded-pill"
                id="search"
                placeholder="Search anything"
              />
            </div>
          </form>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#!" className="nav-link fw-bold">
                <span className="me-1">Wishlist</span>
                <IoIosHeartEmpty size={24} />
              </a>
            </li>
            <li className="nav-item">
              <a href="#!" className="nav-link fw-bold">
                <span className="me-1">Cart</span>
                <IoIosCart size={24} />
              </a>
            </li>
            <li className="nav-item dropdown">
              <img
                src={require("../assets/avatar-0.jpg")}
                alt=""
                className=" rounded-circle shadow-sm dropdown-toggler"
                width={"40px"}
                resizeMethod={"contain"}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
