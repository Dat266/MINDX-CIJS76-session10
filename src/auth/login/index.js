import { useContext, useRef } from "react";

import { useNavigate } from "react-router-dom";
import { dataContext } from "../../components/Provider";

const Login = () => {
  const inputRef = useRef();
  const { dataLogin, setDataLogin, initalData, setIsLogin, isLogin } =
    useContext(dataContext);
  const navigate = useNavigate();

  const data = JSON.parse(localStorage.getItem("users")) || [];

  const handleLogin = (e) => {
    e.preventDefault();

    const user = data.filter(
      (item) =>
        dataLogin.email === item.email && dataLogin.password === item.password
    );

    if (!user[0]) return alert("Vui lòng đăng nhập lại !");

    localStorage.setItem("login", JSON.stringify(user));

    setDataLogin(initalData);
    setIsLogin(true);

    inputRef.current.focus();

    navigate("/");
  };
  return (
    <form className="form-login" onSubmit={handleLogin}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email
        </label>
        <input
          ref={inputRef}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) =>
            setDataLogin({ ...dataLogin, email: e.target.value })
          }
          value={dataLogin.email}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(e) =>
            setDataLogin({ ...dataLogin, password: e.target.value })
          }
          value={dataLogin.password}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default Login;
