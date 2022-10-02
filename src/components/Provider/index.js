import React, { createContext, useRef, useState } from "react";
const dataContext = createContext();
const ProviederContext = ({ children }) => {
  const inputRef = useRef();
  const initalData = {
    email: "",
    password: "",
  };

  const initalUser = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initalUser);
  const [lists, setLists] = useState([]);
  const [dataLogin, setDataLogin] = useState(initalData);
  const [isLogin, setIsLogin] = useState(false);

  const value = {
    inputRef,
    dataLogin,
    setDataLogin,
    initalData,
    initalUser,
    setLists,
    lists,
    setUser,
    user,
    isLogin,
    setIsLogin,
  };
  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
};

export { ProviederContext, dataContext };
