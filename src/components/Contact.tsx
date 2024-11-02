import React from "react";
import { LuSend } from "react-icons/lu";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center bg-gray-900 justify-center min-h-screen p-6 md:p-12"
    >
      <h2 className="text-2xl font-extrabold pt-10 md:pt-0  mb-8">
        <span className="text-[#00EEFF] text-5xl font-extrabold">Contact</span>{" "}
        Us
      </h2>

      <div className="w-full bg-black bg-opacity-45 rounded-xl p-6 sm:p-16 shadow-lg">
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4 md:px-5 mt-5 gap-3 md:gap-0">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-3 rounded-xl bg-[#323846] tracking-wide"
            />
            <input
              type="text"
              placeholder="Subject"
              className="md:w-3/4 w-full p-3 rounded-xl bg-[#323846] tracking-wide "
            />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4 md:px-5 gap-3 md:gap-0">
            <input
              type="tel"
              placeholder="Tel no"
              className="md:w-3/4 w-full p-3 rounded-xl bg-[#323846] tracking-wide"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-xl bg-[#323846] tracking-wide "
            />
          </div>

          <div className="md:px-5">
            <textarea
              placeholder="Your Message"
              rows={12}
              className="w-full p-3 rounded-xl bg-[#323846] tracking-wideresize-none"
            ></textarea>
          </div>

          <div className="md:px-5 md:flex md:justify-end md:items-center ">
            <button
              type="submit"
              className="w-full md:w-auto md:h-[5vh] bg-[#00EEFF] font-medium gap-2 py-2 text-white md:py-5 px-6 rounded-xl shadow-black shadow-md hover:bg-[#00B6C3] mt-4 flex items-center justify-center hover:shadow-lg hover:shadow-black transition duration-300 ease-in-out"
            >
              Send Message
              <span className="ml-2">
                <LuSend />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
