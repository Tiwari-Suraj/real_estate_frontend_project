import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-scroll";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
  return (
    <div className="absolute top-0 left-0 w-full z-10 ">
      <div className=" container mx-auto flex justify-between items-center py-1 px-6 md:px-30 lg:px-22 bg-transparent">
        <img className="w-40 h-30" src={assets.logo_dark} alt="" />
        <ul className="hidden md:flex gap-7 text-white">
          <Link
            to="home"
            smooth={true}
            duration={800}
            offset={-60}
            className="cursor-pointer hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={800}
            offset={-60}
            className="cursor-pointer hover:text-gray-400"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={800}
            offset={-60}
            className="cursor-pointer hover:text-gray-400"
          >
            Projects
          </Link>
          <Link
            to="testimonials"
            smooth={true}
            duration={800}
            offset={-60}
            className="cursor-pointer hover:text-gray-400"
          >
            Testimonials
          </Link>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full text-1xl ">
          Sign up
        </button>
        <img
          onClick={() => setShowMobileMenu(true)}
          className="md:hidden w-7 cursor-pointer"
          src={assets.menu_icon}
          alt=""
        />
      </div>
      {/* mobile menu */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        }  right-0 top-0 bottom-0 overflow-hidden bg-white`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg  font-medium bg-white transition-all">
          <a
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-fll inline-block"
            href="#Header"
          >
            Home{" "}
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-fll inline-block"
            href="#About"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-fll inline-block"
            href="#Projects"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-fll inline-block"
            href="#Testimonials"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
