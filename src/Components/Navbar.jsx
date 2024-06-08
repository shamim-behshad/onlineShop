import React, { useState } from "react";
import logo from "../assets/navbar/logo.png";
import profilePic from "../assets/navbar/profile.jpg";

const Navbar = () =>{
    return(
      <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        {/* Left side - Circle picture profile and greeting */}
        <div className="flex items-center relative">
          <div>
            <img
              src={profilePic}
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4 cursor-pointer transition-transform duration-300 transform hover:scale-110"
            />
          </div>
          <p className="text-white">Hi James</p>
        </div>

        <div className="hidden md:block">
          <img src={logo} alt="Logo" className="w-24" />
        </div>

        <div className="flex items-center">
          <div className="bg-red-500 w-8 h-8 rounded-full flex items-center justify-center">
            <p className="text-white">0</p>
          </div>
        </div>
      </div>
    </nav>
    );
};

export default Navbar;