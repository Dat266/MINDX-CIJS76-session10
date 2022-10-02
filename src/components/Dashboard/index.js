import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { dataContext } from "../Provider";

const Dashboard = () => {
  const navigate = useNavigate();
  const { setIsLogin } = useContext(dataContext);
  const handlerLogout = () => {
    localStorage.removeItem("login");
    setIsLogin(false);
    navigate("/auth/login");
  };
  return (
    <div>
      <div>
        <Link to="/products">Product</Link>
      </div>
      <div>
        <Link to="/invoices">Invoices</Link>
      </div>
      <div>
        <Link to="/cart">Cart</Link>
      </div>
      <div>
        <Link to="/profile">Profile</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>

      <button onClick={handlerLogout}>Đăng xuất</button>
    </div>
  );
};

export default Dashboard;
