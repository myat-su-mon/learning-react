import React from "react";
import Navbar from "./Navbar";
import Footer from './Footer'
const Template = ({children}) => {
  return (
    <div className="position-relative">
      <h1>App</h1>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Template;
