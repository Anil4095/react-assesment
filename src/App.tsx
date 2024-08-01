import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./component/login";
import { useSelector } from "react-redux";
import { RootState } from "./redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Signup from "./component/signup";
import Navbar from "./common/Navbar";

const App: React.FC = () => {
  const loginData: any = useSelector((state)=> state)
  console.log("value of auth token is", loginData.isLoggedIn);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
