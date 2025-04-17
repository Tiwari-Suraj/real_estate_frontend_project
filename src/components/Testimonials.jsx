import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";
const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-10 pt-20  lg:px-32  w-full overflow-hidden"
      id="testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer
        <span className=" underline underline-offset-4 decoration-1 under font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 w-80 mx-auto">
        Real Stories from Those Who Found Home with Us
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonials, index) => (
          <div
            key={index}
            className="max-w-[340px] border shadow-lg rounded border-gray-300 px-8 py-12 text-center"
          >
            <img
              className="w-24  rounded-all mx-auto mb-4"
              src={testimonials.image}
              alt="testimonials.alt"
            />
            <h2 className="text-xl text-gray-700  font-medium">
              {testimonials.name}
            </h2>
            <p className="text-gray-600 mb-4 text-sm"> {testimonials.title} </p>

            <div className="flex justify-center gap-1 text-red-500 mb-4 mt-4">
              {Array.from({ length: testimonials.rating }, (item, index) => (
                <img className="" key={index} src={assets.star_icon} alt="" />
              ))}
            </div>
            <div>
              <p className="text-gray-600">{testimonials.text}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
