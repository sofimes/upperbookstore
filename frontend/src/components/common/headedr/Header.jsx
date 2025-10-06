import React, { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        scroll ? "bg-white shadow-lg " : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center px-4  lg:px-12 ">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 lg:pl-12 py-2">
          <h2 className="text-xl font-bold text-primary  lg:text-3xl flex items-center ">
            {" "}
            <span
              className="text-yellow-400 bg-black p-2 text-2xl rounded-2xl
              lg:px-5 lg:text-3xl lg:py-3 lg:rounded-3xl lg:mr-2 md:mr-2

            "
            >
              Upper
            </span>{" "}
            <span>Book</span>
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <div
          className="hidden md:flex items-center ml-auto bg-white shadow-lg 
  rounded-tl-none  rounded-bl-full lg:mx-7 lg:px-36   
  px-5 py-3"
        >
          <nav className="hidden md:flex items-center space-x-6 lg:my-4 md:space-x-4">
            <NavLink
              to="/Books"
              className="text-gray-700 hover:border-b-4 decoration-4 hover:border-yellow-400 transition hover:font-bold"
            >
              Home
            </NavLink>
            <NavLink
              to="/Books"
              className="text-gray-700 hover:border-b-4 decoration-4 hover:border-yellow-400 transition hover:font-bold"
            >
              Books
            </NavLink>
            <NavLink
              to="/Categories"
              className="text-gray-700 hover:border-b-4 decoration-4 hover:border-yellow-400 transition hover:font-bold "
            >
              Categories
            </NavLink>
            <NavLink
              to="/Pages"
              className="text-gray-700 hover:border-b-4 decoration-4 hover:border-yellow-400 transition hover:font-bold"
            >
              Pages
            </NavLink>
            <NavLink
              to="/Contact"
              className="text-gray-700 hover:border-b-4 decoration-4 hover:border-yellow-400 transition hover:font-bold"
            >
              Contact
            </NavLink>
            <Link to="/login">
              <button className="text-yellow-400 bg-black text-lg rounded-full px-4 py-2  hover:text-white transition  hover:animate-bounce lg:py-4 lg:px-8 lg:text-xl font-bold ">
                Login/Register
              </button>
            </Link>
          </nav>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 hover:text-primary focus:outline-none z-50"
          onClick={toggleMenu}
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`absolute top-0 left-0 w-full bg-white shadow-lg transform ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-300 md:hidden`}
        >
          <nav className="flex flex-col items-center space-y-4 py-6">
            <NavLink
              to="/Books"
              className="text-gray-700 hover:border-b-4 decoration-4 hover:border-yellow-400 transition hover:font-bold"
              onClick={toggleMenu}
            >
              Books
            </NavLink>
            <NavLink
              to="/Categories"
              className="text-gray-700 hover:border-b-4 decoration-4 hover:border-yellow-400 transition hover:font-bold"
              onClick={toggleMenu}
            >
              Categories
            </NavLink>
            <NavLink
              to="/Pages"
              className="text-gray-700 hover:border-b-4 decoration-4 hover:border-yellow-400 transition hover:font-bold"
              onClick={toggleMenu}
            >
              Pages
            </NavLink>
            <NavLink
              to="/Contact"
              className="text-gray-700 hover:border-b-4 decoration-4 hover:border-yellow-400 transition hover:font-bold"
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
            <Link to="/Profile" onClick={toggleMenu}>
              <button className="text-yellow-400 bg-black text-md rounded-full px-4 py-2  hover:text-white transition">
                Login/Register
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
