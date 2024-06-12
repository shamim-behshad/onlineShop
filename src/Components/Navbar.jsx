import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/navbar/logo.png";
import profilePic from "../assets/navbar/profile.jpg";

const Navbar = ({ cartCount }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = useCallback(() => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  }, []);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center relative">
          <div onClick={toggleDetails}>
            <img
              src={profilePic}
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4 cursor-pointer transition-transform duration-300 transform hover:scale-110"
            />
          </div>
          <p className="text-white">Hi James</p>
          <div className={`absolute bg-white p-4 mt-2 top-12 right z-10 rounded-lg w-64 bg-opacity-20
            backdrop-blur-lg border border-opacity-70 shadow-lg transition-all duration-300 ease-in-out transform ${showDetails ? "scale-y-200" : "scale-y-0"}`}>
            <p>First Name: James</p>
            <p>Last Name: Sath</p>
            <p>Email: james.sath@gmail.com</p>
            <p>Username: jamees.ok</p>
            <p>Phone Number: 09121234567</p>
          </div>
        </div>

        <div className="hidden md:block">
          <img src={logo} alt="Logo" className="w-24" />
        </div>

        <div className="flex items-center">
          <Link to="/cart" className="text-white mr-4">Cart</Link>
          <div className="bg-red-500 w-8 h-8 rounded-full flex items-center justify-center">
            <p className="text-white">{cartCount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
