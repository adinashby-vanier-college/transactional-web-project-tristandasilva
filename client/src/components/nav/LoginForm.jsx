/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import axios from "axios";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginForm() {
    await axios.post(
      "http://localhost:5050/users/login",
      {
        email: email,
        password: password,
      },
      { withCredentials: true }
    );
  }

  return (
    <form
      className="text-white"
      onSubmit={async (e) => {
        e.preventDefault();
        await loginForm().then(() => {
          location.reload();
        });
      }}
    >
      <div className="mb-3">
        <label className="font-thin">Email</label>
        <input
          type="email"
          className=" bg-neutral-700 border-none focus:ring-4 focus:ring-yellow-500/90 rounded-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="font-thin">Password</label>
        <input
          type="password"
          className=" bg-neutral-700 border-none focus:ring-4 focus:ring-yellow-500/90 rounded-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to={"/register"}>
          <p className="my-2 text-sm">Forgot Password?</p>
        </Link>
      </div>
      <div className="flex items-center gap-5 mt-5">
        <Link to={"/register"}>
          <p className="whitespace-nowrap underline underline-offset-4">
            Register Here
          </p>
        </Link>
        <input
          className="bg-yellow-500 px-3 p-2 rounded-lg w-full cursor-pointer"
          type="submit"
          value={"Login"}
        />
      </div>
    </form>
  );
};

export default LoginForm;
