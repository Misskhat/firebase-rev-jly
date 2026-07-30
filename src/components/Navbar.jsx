import React from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <div className="bg-gradient-to-br from-[#90CAF9] via-[#2196F3] to-[#90CAF9] py-2 border border-white rounded">
      <nav className="container w-11/12 mx-auto flex items-center justify-between">
        <p className="text-xl">🔥Base </p>
        <ul className="flex items-center gap-2">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "text-white" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "text-white" : "")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/profile"}
              className={({ isActive }) => (isActive ? "text-white" : "")}
            >
              Profile
            </NavLink>
          </li>
        </ul>

        <Link
          className="btn text-white bg-gradient-to-br from-[#90CAF9] via-[#2196F3] to-[#90CAF9]"
          to={"/singin"}
        >
          SignIn
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
