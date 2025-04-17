import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden "
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
      >
        <h2 className="text-2xl sm:text-3xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 text-gray-100">
          Encyclopedia For All New Projects <br /> in{" "}
          <spna className="underline underline-offset-4 decoration-1 under font-light text-gray-400">
            DEORIA
          </spna>
        </h2>
        <div className="space-x-6 mt-16">
          <a href="" className="border border-white py-3 px-8 rounded-full ">
            Projects
          </a>
          <a href="#contact" className=" bg-blue-500 py-3 px-8 rounded-full ">
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
