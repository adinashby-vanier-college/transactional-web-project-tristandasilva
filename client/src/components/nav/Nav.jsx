/* eslint-disable no-unused-vars */
import React, { Component, useState } from "react";
import { Avatar, Dropdown, Navbar, Button } from "flowbite-react";
import SearchBar from "../SeachBar";

import { Link } from "react-router-dom";
import CartList from "../cart/CartList";
import LoginDropdown from "./LoginDropdown";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <CartList onClick={setOpen} />}
      <Navbar fluid className="bg-brand-darkgrey">
        <Navbar.Brand href="#">
          <img
            src="logo.svg"
            className="ml-3 mr-3 h-6 sm:h-9"
            alt="VinylVault Logo"
          />
          <span className="self-center whitespace-nowrap text-l font-semibold text-white">
            VinylVault
          </span>
        </Navbar.Brand>
        <div className="flex gap-3 items-center">
          <SearchBar></SearchBar>
          <LoginDropdown />
          <img
            onClick={() => {
              setOpen(!open);
            }}
            src="cart-icon.svg"
            alt="Cart icon"
            className="h-8"
          ></img>
        </div>
      </Navbar>
      <div className="h-8 text-white px-40 flex justify-between items-center bg-[#8CBEB270]">
        <p>Genre</p>
        <p>Trending</p>
        <p>Recent</p>
        <p>Discount</p>
        <p>Discovery</p>
      </div>
    </>
  );
};

export default Nav;
