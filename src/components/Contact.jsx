import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "07d2a1c8-ec55-4b4b-9cb6-389953c12808");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message);
      setResult("");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: -0 }}
      viewport={{ once: true }}
      className=" text-center p-6 py-20 lg:px-32  w-full overflow-hidden "
      id="contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className=" underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 mx-w-80 mx-auto">
        Ready to Make a Move? Let’s Build Your Future Together
      </p>
      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex gap-[15px]">
          <div className="w-1/2 text-left">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-2 mt-2"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-1/2 text-left">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-4 h-48 resize-non"
            type="text"
            name="Message"
            placeholder="Message"
            required
          />
        </div>
        <button className="bg-blue-600 text-white py-2 px-12 mt-10  rounded-full  ">
          {result ? result : "Send Message "}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
