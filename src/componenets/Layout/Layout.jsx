import React from "react";
import Header from "../Header/Header";
const Layout = ({ children }) => {
  console.log("This is layout");
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
