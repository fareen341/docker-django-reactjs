import React from 'react'
import { Link } from "react-router-dom";


const styles = {
  navsection: {
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    fontSize: "17px"
  },
  navbarbg: {
    background: "rgba(25, 25, 25, .8)"
  }
}


export const Header = () => {
  return (
    <div>
      <div style={styles.navsection}>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent p-3" style={styles.navbarbg}>
          <div className="container-fluid">
            <a className="navbar-brand" href="" style={{ color: "black" }}>
              <i>Online Shop</i>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" fill="currentColor" className="bi bi-watch" viewBox="0 0 14 14">
                <path d="M8.5 5a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V5z" />
                <path d="M5.667 16C4.747 16 4 15.254 4 14.333v-1.86A5.985 5.985 0 0 1 2 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86a5.99 5.99 0 0 1 1.918 3.48.502.502 0 0 1 .582.493v1a.5.5 0 0 1-.582.493A5.99 5.99 0 0 1 12 12.473v1.86c0 .92-.746 1.667-1.667 1.667H5.667zM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0z" />
              </svg>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" style={{ marginLeft: "30px" }}>
                  {/* <a className="nav-link" aria-current="page" href="/">Home</a> */}
                  <Link to="/" className="nav-link">Home</Link>
                  
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/contact">Contact</a>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" aria-current="page" href="/about">About</a> */}
                  <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" aria-current="page" href="/product">Products</a> */}
                  <Link to="/product" className="nav-link">Products</Link>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" aria-current="page" href="/collection">Collections</a> */}
                  <Link to="/collection" className="nav-link">Collections</Link>
                </li>
                <li className="nav-item dropdown">
                  {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Account
                  </a> */}
                  <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Account</Link>

                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      {/* <a className="dropdown-item" href="/login">Sign in</a> */}
                      <Link to="/login" className="dropdown-item">Sign in</Link>
                    </li>
                    <li>
                      {/* <a className="dropdown-item" href="/register">Register</a> */}
                      <Link to="/register" className="dropdown-item">Register</Link>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      {/* <a className="dropdown-item" href="/help">Help</a> */}
                      <Link to="/help" className="dropdown-item">Help</Link>
                    </li>
                  </ul>
                </li>
                



                <li className="nav-item">
                  <span className="nav-link" style={{ border: "none" }}><b></b></span>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                  </a>
                  <ul className="dropdown-menu " aria-labelledby="navbarDropdownMenuLink" style={{ borderTop: "2px solid black" }}>
                    <li>
                      {/* <a className="dropdown-item" href="/account">My account</a> */}
                      <Link to="/account" className="dropdown-item">My account</Link>
                      </li>
                    <li><a className="dropdown-item" href="">Setting</a></li>
                    <li><a className="dropdown-item" href="">Logout</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href=""><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg> </a>
                </li>
                




              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
