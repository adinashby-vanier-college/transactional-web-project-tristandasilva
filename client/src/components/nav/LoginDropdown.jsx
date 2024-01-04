/* eslint-disable no-unused-vars */
import React, { Component, useState } from "react";
import LoginForm from "./LoginForm";
import useQuery from "../../hooks/useQuery";
import axios from "axios";

const LoginDropdown = () => {
  const [open, setOpen] = useState(false);
  const response = useQuery("http://localhost:5050/users/");
  return (
    <div className=" bg-brand-darkgrey relative flex justify-center">
      <img
        className="h-8"
        src="user-icon.svg"
        onClick={() => {
          setOpen(!open);
        }}
      ></img>
      {open && (
        <div className="absolute h-fit m-3 p-4 shadow-lg rounded-md bg-neutral-800 z-40 flex justify-start top-7 -right-7">
          {response ? (
            <div className="flex flex-col items-center text-white">
              <p className="whitespace-nowrap text-xl font-extralight">
                Hello, {response.first_name}
              </p>
              <form
                onSubmit={async () => {
                  await axios.get("http://localhost:5050/users/logout", {
                    withCredentials: true,
                  });
                }}
              >
                <input
                  className="bg-red-800 p-2 w-32 text-md m-3 rounded-lg"
                  type="submit"
                  value={"Logout"}
                />
              </form>
            </div>
          ) : (
            <LoginForm />
          )}
        </div>
      )}
    </div>
  );
};

export default LoginDropdown;
