import React from "react";
import { motion } from "framer-motion";
import AuthorlistCat from "../common/author/AuthorlistCat";
import { Authorlist } from "../../utils/Authorlist";
const Authors = () => {
  return (
    <motion.div className=" relative  mb-20 flex flex-col justify-center items-center  lg:mx-48 overflow-x:hidden">
      <motion.div className="py-20 lg:pb-8 mt-12 lg:mt-0 px-6 lg:px-20 bg-white font-poppins  ">
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
              Authors
            </motion.span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8 }}
              className="flex-grow border-t border-gray-400"
            ></motion.span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mt-3">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-900 font-medium  mr-3 leading-[0.88]"
            >
              Most Popular
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className=" text-amber-400 font-light leading-[0.82]"
            >
              Authors
            </motion.span>
          </h1>
        </div>
      </motion.div>
      <motion.div className="grid grid-col-1 lg:grid-cols-4 ">
        {Authorlist.map((author, i) => (
          <motion.div key={i} className="col-span-1 lg:col-span-1 lg:px-2">
            <AuthorlistCat author={author} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Authors;
