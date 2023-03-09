import React from "react";
import { useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProduct] = useState([]);

  const getProducts = async () => {
    const { data } = await axios.get("http://localhost:3000/products");
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mx-auto">
      <Link to="/create-product"><button className="text-white bg-violet-400 px-5 py-2 rounded shadow-md">Create New Product</button></Link>
      <div className="flex flex-wrap gap-5 my-5 justify-center">
        {products?.map((product) => (
          <Card key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
