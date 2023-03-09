import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setName] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const apiLogin = async (userdata) => {
    const { data } = await axios.post(
      "https://dummyjson.com/auth/login",
      userdata
    );
    console.log(data);
    setIsLoading(false);
    if (data) {
      const user = {
        image: data?.image,
        name: data?.username,
        token: data?.token,
      };
      localStorage.setItem("userData", JSON.stringify(user));
      navigate("/");
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await apiLogin({ username, password });
    setIsLoading(true);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form
        onSubmit={onSubmitHandler}
        className="w-96 border p-5 rounded shadow-lg"
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your name
          </label>
          <input
            value={username}
            onChange={(e) => setName(e.target.value)}
            type="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {isLoading ? "loading..." : "login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
