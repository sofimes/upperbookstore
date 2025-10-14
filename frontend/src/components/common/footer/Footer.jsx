// Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="w-full mt-34 ">
      {/* Newsletter / top card */}
      <div className="mx-a lg:mx-48   ">
        <div className="relative -mt-1 mb-12">
          <div className="bg-amber-400/80 rounded-3xl p-10  md:p-16 lg:py-30 text-white shadow-xl overflow-hidden ">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
              <button className="mb-6 bg-gray-900/90 text-white text-s px-5 py-1.5 rounded-full">
                Get Discounts
              </button>

              <h2 className="text-3xl md:text-5xl text-gray-600 font-extrabold drop-shadow-sm text-center">
                Subscribe to newsletter
              </h2>

              <form className="mt-8 w-full max-w-2xl">
                <div className="flex items-center bg-white rounded-full ring-2 ring-white/60 shadow-lg overflow-hidden">
                  <input
                    type="email"
                    placeholder="Enter your email ..."
                    className="flex-1 px-6 py-4 outline-none text-gray-700"
                  />
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-gray-900/90 text-white px-6 py-3 rounded-full mr-1"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M22 6L11 13 2 6"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer block */}
      <div className="mx-auto  lg:mx-48">
        <div className="bg-gray-100 rounded-3xl px-8 md:px-12 py-12 md:py-20 shadow-sm lg:pt-45">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left area - logo + quote */}
            <div className="lg:col-span-4 flex flex-col gap-6 ">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-indigo-300 flex items-center justify-center text-white font-bold">
                  UB
                </div>

                <div>
                  <div className="text-amber-400 text-xl font-bold tracking-wide">
                    UPPER
                  </div>
                  <div className="text-xl  text-gray-700 tracking-wide">
                    BOOK
                  </div>
                </div>
              </div>

              <blockquote className="text-md text-gray-600 leading-relaxed  ">
                “Be who you are and say what you feel, because those who mind
                don't matter, and those who matter don't mind.”
              </blockquote>

              <div className="text-gray-500 text-md">– Bernard M. Baruch</div>
            </div>

            {/* Middle columns */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 pl-0 md:pl-6">
              {/* Column 1 */}
              <div className=" pl-6 border-l">
                <h4 className="font-bold text-lg text-gray-800 mb-4 ">Menu</h4>
                <ul className="space-y-2 text-gray-500 text-md">
                  <li>Home</li>
                  <li>Books</li>
                  <li>Collections</li>
                  <li>Categories</li>
                  <li>Tags</li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="border-l pl-6">
                <h4 className="font-bold text-gray-800 text-lg mb-4">
                  Support
                </h4>
                <ul className="space-y-2 text-gray-500 text-md">
                  <li>FAQs</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Request a Book</li>
                  <li>DMCA Notice</li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="border-l pl-6">
                <h4 className="font-bold text-gray-800 mb-4 text-lg">
                  About us
                </h4>
                <ul className="space-y-2 text-gray-500 text-md">
                  <li>About us</li>
                  <li>Partners</li>
                  <li>Features</li>
                  <li>Affiliate</li>
                  <li>Contact us</li>
                </ul>
              </div>
            </div>
          </div>

          {/* bottom social bar */}
          <div className="mt-18 rounded-2xl bg-amber-400/80 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="bg-white/90 p-2 rounded-full inline-flex items-center justify-center transition-transform transform hover:scale-110"
                aria-label="facebook"
              >
                <FaFacebookF
                  className="w-4 h-4 text-gray-700"
                  style={{ color: "#0A66C2" }}
                />
              </a>
              <a
                href="#"
                className="bg-white/90 p-2 rounded-full inline-flex items-center justify-center transition-transform transform hover:scale-110"
                aria-label="twitter"
              >
                <FaTwitter
                  className="w-4 h-4 text-gray-700"
                  style={{ color: "#0A66C2" }}
                />
              </a>
              <a
                href="#"
                className="bg-white/90 p-2 rounded-full inline-flex items-center justify-center transition-transform transform hover:scale-110"
                aria-label="instagram"
              >
                <FaInstagram className="w-4 h-4" style={{ color: "#E4405F" }} />
              </a>
              <a
                href="#"
                className="bg-white/90 p-2 rounded-full inline-flex items-center justify-center transition-transform transform hover:scale-110"
                aria-label="linkedin"
              >
                <TbBrandLinkedin
                  className="w-4 h-4"
                  style={{ color: "#0A66C2" }}
                />
              </a>
            </div>

            <div className="text-gray-500 text-sm">
              © 2025 All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
