import axios from "axios";
import React from "react";
import { useState } from "react";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const createProduct = async () => {
    const { data } = await axios.post("http://localhost:3000/products", {
      title,
      description,
      image,
      category,
      price,
    });
    console.log(data);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    createProduct();
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <form className="flex flex-col gap-4 rounded border w-96 p-10 justify-center items-center">
        <h1 className="text-violet-400 font-bold text-2xl tracking-wider">
          Create New Product
        </h1>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full outline-none border-b-2 py-2"
          type="text"
          placeholder="Enter title..."
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full outline-none border-b-2 py-2"
          type="text"
          placeholder="Enter description..."
        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full outline-none border-b-2 py-2"
          type="text"
          placeholder="Enter image url..."
        />
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full outline-none border-b-2 py-2"
          type="text"
          placeholder="Enter category..."
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full outline-none border-b-2 py-2"
          type="text"
          placeholder="Enter price..."
        />
        <button className="px-4 py1 text-sm bg-violet-400 text-white rounded shadow-sm">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
