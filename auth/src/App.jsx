import React from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Guard from "./components/Guard";
import CreateProduct from "./components/CreateProduct";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Guard>
                <Dashboard />
              </Guard>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/create-product"
            element={
              <Guard>
                <CreateProduct />
              </Guard>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
