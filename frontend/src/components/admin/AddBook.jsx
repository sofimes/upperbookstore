import React, { useState } from "react";
import { motion } from "framer-motion";
const AddBook = () => {
  return (
    <motion.div
      className="p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Add New Book
      </h2>
      <form className="grid grid-cols-1 gap-4">
        <motion.input
          type="text"
          placeholder="Book Name"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          whileFocus={{ scale: 1.05 }}
        />
        <motion.input
          type="text"
          placeholder="Author Name"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
          // onFocus={handleFocus}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          whileFocus={{ scale: 1.05 }}
        />
        <motion.input
          type="text"
          placeholder="Book Category"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
          // onFocus={handleFocus}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          whileFocus={{ scale: 1.05 }}
        />
        <motion.textarea
          placeholder="Book Description"
          // value={description}
          // onChange={(e) => setDescription(e.target.value)}
          // onFocus={handleFocus}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none"
          rows={4}
          whileFocus={{ scale: 1.05 }}
        />
        <label className="text-gray-500" htmlFor="image">
          Upload image
        </label>
        <motion.input
          id="image"
          type="file"
          accept="image/*"
          placeholder=""
          // onChange={handleFileChange}
          // onFocus={handleFocus}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          whileFocus={{ scale: 1.05 }}
        />
        <label className="text-gray-500" htmlFor="uploadfile">
          Upload file
        </label>
        <motion.input
          id="uploadfile"
          type="file"
          accept=".pdf, .epub, .docx"
          // onChange={handleFileChange}
          // onFocus={handleFocus}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          whileFocus={{ scale: 1.05 }}
        />
        {/* {errorMessage && (
          <div className="text-red-700 text-center mb-4">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="text-green-700 text-center mb-4">
            {successMessage}
          </div>
        )} */}
        <motion.button
          type="submit"
          className=" bg-gray-700 hover:bg-gray-500 text-md rounded-full px-4  transition  lg:py-2 lg:px-7 lg:text-xl  w-full py-3  text-white font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Add Book
        </motion.button>
      </form>
    </motion.div>
  );
};

export default AddBook;
