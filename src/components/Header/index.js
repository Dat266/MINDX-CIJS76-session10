import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../Provider";

const Header = () => {
  const { isLogin } = useContext(dataContext);
  console.log(isLogin);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={isLogin ? "nav-item" : "nav-item disable"}>
                <Link className="nav-link " to="/">
                  Home
                </Link>
              </li>
              <li className={isLogin ? "nav-item disable" : "nav-item "}>
                <Link className="nav-link" to="/auth/login">
                  Login
                </Link>
              </li>
              <li className={isLogin ? "nav-item disable" : "nav-item "}>
                <Link className="nav-link" to="/auth/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
