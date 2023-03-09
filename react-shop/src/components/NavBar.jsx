import React from "react";

const NavBar = () => {
  return (
    <nav
      className="d-flex justify-content-between align-items-center border rounded border-dark p-3
                    mt-3"
    >
      <h3>SHOP</h3>
      <button className="btn btn-outline-dark">
        <i className="bi bi-search"></i>
      </button>
      <button className="btn btn-outline-dark">
        <i className="bi bi-bag"></i>
      </button>
    </nav>
  );
};

export default NavBar;
