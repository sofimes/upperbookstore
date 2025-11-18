// import SearchBar from "../common/searchbar/SearchBar";
// import { motion } from "framer-motion";
// import Booksingle from "../common/book/Booksingle";
// import { booklists } from "../../utils/booklists";
// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.06,
//     },
//   },
// };
// const Book = () => {
//   return (
//     <motion.div className=" relative mt-32  flex flex-col justify-center items-center  lg:mx-48 overflow-x:hidden">
//       <SearchBar />
//       <motion.div className="py-20 pb-8 mt-12 px-6 lg:px-20 bg-white font-poppins lg:mt-28 ">
//         <div className="text-center mb-12">
//           <div className="flex items-center justify-center mb-4 w-full lg:mb-8">
//             <motion.span
//               initial={{ width: 0 }}
//               animate={{ width: "100%" }}
//               transition={{ duration: 0.8 }}
//               className="flex-grow border-t border-gray-400"
//             ></motion.span>
//             <motion.span
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="px-4 py-1 mx-3 rounded-full bg-gray-700 text-yellow-400 text-sm font-medium  lg:text-xl "
//             >
//               Books
//             </motion.span>
//             <motion.span
//               initial={{ width: 0 }}
//               animate={{ width: "100%" }}
//               transition={{ duration: 0.8 }}
//               className="flex-grow border-t border-gray-400"
//             ></motion.span>
//           </div>
//           <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mt-3 lg:mt-8">
//             <motion.span
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//               className="text-gray-900  font-medium mr-3 leading-[0.82]"
//             >
//               This year's
//             </motion.span>
//             <motion.span
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.8 }}
//               className="text-amber-400 font-light mr-3 leading-[0.88]"
//             >
//               top
//             </motion.span>
//             <motion.span
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//               className="text-gray-900  font-medium leading-[0.82]"
//             >
//               sellers
//             </motion.span>
//           </h1>
//         </div>
//       </motion.div>
//       <motion.section
//         className="w-full px-4 sm:px-6 lg:px-0 max-w-7xl mx-auto"
//         initial="hidden"
//         whileInView="visible"
//         variants={containerVariants}
//         viewport={{ once: false, amount: 0.1 }}
//       >
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {booklists.map((book, i) => (
//             <Booksingle key={book.id ?? i} book={book} idx={i} />
//           ))}
//         </div>
//       </motion.section>
//     </motion.div>
//   );
// };

// export default Book;
// Book.jsx
import SearchBar from "../common/searchbar/SearchBar";
import { motion } from "framer-motion";
import Booksingle from "../common/book/Booksingle";
import { booklists } from "../../utils/booklists";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const Book = () => {
  return (
    <motion.div className="relative mt-20 flex flex-col items-center lg:mx-16 justify-center lg:mx-48 ">
      <SearchBar />

      <motion.div className="py-20 pb-8 mt-12 px-6 lg:px-20 bg-white font-poppins lg:mt-28 ">
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
              className="px-4 py-1 mx-3 rounded-full bg-gray-700 text-white text-sm font-medium  lg:text-xl "
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
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-gray-900  mr-3 font-medium leading-[0.82]"
            >
              This year's
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-amber-400 font-light mr-3 leading-[0.88]"
            >
              top
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-gray-900  font-medium leading-[0.82]"
            >
              sellers
            </motion.span>
          </h1>
        </div>
      </motion.div>

      <motion.section
        className="w-full px-4 sm:px-6 lg:px-0 max-w-7xl mx-auto -mt-8 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {booklists.map((book, i) => (
            <Booksingle key={book.id ?? i} book={book} idx={i} />
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Book;
