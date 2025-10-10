import { motion } from "framer-motion";

const BookCat = ({ book, idx }) => {
  const isTall = idx === 0;
  const textIsDark = book.color === "bg-gray-100";

  const cardVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.995 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.06, duration: 0.45, ease: [0.2, 0.8, 0.2, 1] },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full"
    >
      <motion.article
        custom={idx}
        variants={cardVariant}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.02, y: -6 }}
        whileTap={{ scale: 0.985 }}
        className={`relative overflow-hidden rounded-4xl p-6 transform-gpu
          ${
            isTall
              ? "sm:row-span-2 lg:row-span-2  p-10 lg:h-136 "
              : "p-8 lg:h-65"
          }
          ${book.color} ${textIsDark ? "text-gray-900" : "text-white"}
        `}
        style={isTall ? { minHeight: "100%" } : {}}
      >
        <div
          className={`absolute -left-10 -top-10 w-60 h-60 rounded-full opacity-30 ${
            textIsDark ? "bg-gray-200" : "bg-white/10"
          } filter blur-xl`}
          aria-hidden
        />

        <div className="flex flex-col h-full z-10 relative">
          <h3
            className={`text-2xl md:text-2xl sm:text-3xl font-black tracking-tight mb-4 ${
              textIsDark ? "text-gray-900" : "text-white"
            }`}
          >
            {book.title}
          </h3>

          <div className="">
            <button
              aria-label={`view ${book.title}`}
              className={`inline-flex items-center gap-3 text-sm font-medium rounded-full py-2 px-4 md:px-2 md:gap-1 transition ${
                textIsDark
                  ? "border border-gray-300 bg-white/90 text-gray-900 hover:bg-white"
                  : "border border-white/40 bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  textIsDark
                    ? "border border-gray-300"
                    : "border border-white/50"
                }`}
              >
                -
              </span>
              View collection
            </button>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
};

export default BookCat;
