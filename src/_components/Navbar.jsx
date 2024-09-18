import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbXboxX } from "react-icons/tb";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full text-white bg-gray-400 sticky top-0">
        <nav className="max-w-screen-xl px-4 mx-auto py-5 flex justify-between relative  ">
          <div className="">Logo</div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <TbXboxX /> : <GiHamburgerMenu />}
          </button>
          <div className="hidden md:flex px-4 gap-4">
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/service" >Service</NavLink>
            <NavLink to="/contact" >Contact</NavLink>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden px-4 flex flex-col gap-4 transition-all duration-300 ease-in-out w-full absolute py-2 bg-gray-400   border-2 ">
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Service</NavLink>
            <NavLink>Contact</NavLink>
          </div>
        )}
      </div>
    </>
  );
}
