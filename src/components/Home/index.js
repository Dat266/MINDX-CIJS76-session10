import React from "react";
import Dashboard from "../Dashboard";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("login"));
  return <div>{user ? <Dashboard /> : <h1>Vui lòng đăng nhập</h1>}</div>;
};

export default Home;
