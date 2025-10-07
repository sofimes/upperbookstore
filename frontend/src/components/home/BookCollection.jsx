import { useState } from "react";
import { motion } from "framer-motion";

const BookCollection = () => {
  const [query, setQuery] = useState("");
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    console.log("Search for:", query);
  };
  return (
    <motion.div className=" relative mt-32 mb-20 flex flex-col justify-center items-center w-full lg:mx-20">
      <motion.form
        onSubmit={handleSearchSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute left-6 top-4 sm:left-12 sm:top-6 md:left-20 md:top-8 z-10"
        aria-label="Search books"
      >
        <div className="flex items-center bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-md px-2 py-1">
          <label htmlFor="book-search" className="sr-only">
            Search books
          </label>

          <input
            id="book-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search books, authors..."
            className="outline-none px-3 py-2 text-sm sm:text-sm md:text-base w-40 sm:w-56 md:w-64 bg-transparent placeholder-gray-400"
          />

          <button
            type="submit"
            className="ml-2 rounded-full px-3 py-2 text-sm md:text-base font-medium bg-amber-400 hover:bg-amber-500 text-white transition"
            aria-label="Search"
          >
            Search
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default BookCollection;
