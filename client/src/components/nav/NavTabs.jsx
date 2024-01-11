import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => {
  return (
    <div>
      <div className="text-white px-40 py-[2px] flex sm:flex-col justify-between items-center bg-[#8CBEB270]">
        <Link to="/genre">Genre</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/recent">Recent</Link>
        <Link to="/discount">Less Than Ten</Link>
        <Link to="/discover">Discover</Link>
      </div>
    </div>
  );
};

export default NavTabs;
