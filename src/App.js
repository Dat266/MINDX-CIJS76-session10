import { Route, Routes } from "react-router-dom";
import Login from "../src/auth/login";
import Register from "../src/auth/register";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./products";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
