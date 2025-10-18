import React from "react";
import { motion } from "framer-motion";
import SearchBar from "../components/common/searchbar/SearchBar";
const Books = () => {
  return (
    <motion.div className=" relative mt-32  flex flex-col justify-center items-center  lg:mx-48 overflow-x:hidden">
      <SearchBar />
      <motion.div className="py-20 pb-8 mt-12 px-6 lg:px-20 bg-white font-poppins lg:mt-4 lg:py-2">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4 w-full lg:mb-8">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8 }}
              className="flex-grow border-t border-gray-400"
            ></motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="px-4 py-1 mx-3 rounded-full bg-gray-700 text-yellow-400 text-sm font-medium  lg:text-xl "
            >
              Books
            </motion.span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8 }}
              className="flex-grow border-t border-gray-400"
            ></motion.span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mt-3 lg:mt-8">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-amber-400 font-light mr-3 leading-[0.88]"
            >
              Upper
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-gray-900  font-medium leading-[0.82]"
            >
              Books
            </motion.span>
          </h1>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Books;
