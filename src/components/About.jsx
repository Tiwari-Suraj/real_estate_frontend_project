import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="about"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Our Brand
        </span>
      </h1>

      <p className="text-gray-500 max-w-80 text-center mb-4">
        Your Partner in Building Wealth Through Real Estate
      </p>
      <h1>
        we are passionate about empowering individuals to achieve their
        financial goals through strategic real estate investment. We understand
        that navigating the world of real estate can be daunting, especially for
        first-time investors. That's why we've assembled a team of experienced
        professionals with a proven track record of success. Our team brings
        together expertise in property sourcing, market analysis, financing. At
        Your Partner In Building Wealth Through Real Estate, our vision is to be
        a leading real estate investment firm that transforms communities and
        enriches lives through innovative, sustainable, and profitable real
        estate investments.
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-20 mt-18">
        <img
          className="w-full sm:w-1/2 max-w-lg"
          src={assets.brand_img}
          alt="About"
        />

        <div className="flex flex-col items-center md:items-start  text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-5 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>

          <p className="my-10 max-w-lg">
            We are passionate about empowering individuals to achieve their
            financial goals through strategic real estate investment. We
            understand that navigating the world of real estate can be daunting,
            especially for first-time investors. That's why we've assembled a
            team of experienced professionals with a proven track record of
            success.
          </p>

          <button className="bg-blue-600 text-white px-8 py-2 rounded-full">
            Learn more
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
