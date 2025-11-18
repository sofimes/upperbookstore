import { motion } from "framer-motion";
import { bookcollections } from "../../utils/bookcollections";
import BookCat from "../common/book/BookCat";

const BookCollection = () => {
  const adventure = bookcollections[0];

  const rightGrid = [
    bookcollections[1],
    bookcollections[2],
    bookcollections[3],
    bookcollections[4],
  ];

  return (
    <motion.div className=" relative mb-20  flex flex-col justify-center items-center  lg:mx-48 overflow-x:hidden">
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
              Categories
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
              Book Collections
            </motion.span>
          </h1>
        </div>
      </motion.div>
      <motion.div className="w-full px-6 lg:px-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-1 md:col-span-1 lg:row-span-2 md:mr-12 md:ml-14 sm:mx-12 lg:mx-0 mx-6">
            <div className="h-full">
              <BookCat book={adventure} idx={0} isLeftTall />
            </div>
          </div>
          <div className="lg:col-span-2 md:col-span-2 md:mr-20 md:ml-14 sm:mx-12 mx-6 lg:mx-0">
            <div
              className="grid lg:grid-cols-2 md:grid-cols-2 gap-6 sm:grid-cols-2"
              style={{ gridAutoRows: "1fr" }}
            >
              {rightGrid.map((book, i) => (
                <div key={i} className="col-span-1">
                  <BookCat book={book} idx={i + 1} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookCollection;
