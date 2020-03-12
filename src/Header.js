import React from "react";
import { FaRegUser } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex p-20 pb-0 pt-0 flex-justify-space-between">
      <div className="flex flex-justify-start">
        <img className="logo" src="../../assets/logo_transparent.png" />
      </div>
      <div className="flex flex-justify-center">
        <nav>
          <a className="active-link">Home</a>
          <a>Upcoming</a>
          <a>Top Rated</a>
        </nav>
      </div>
      <div className="flex flex-justify-end">
        <FaRegUser className="user-icon" />
      </div>
    </header>
  );
}
