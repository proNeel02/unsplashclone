import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
const Home = () => {
  console.log("Hello");
  return (
    <div>
      {" "}
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
