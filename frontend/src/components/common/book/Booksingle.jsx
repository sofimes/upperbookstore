import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
};

const Stars = ({ rating = 0, size = 14 }) => {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <div className="flex items-center gap-1" aria-hidden>
      {Array.from({ length: full }).map((_, i) => (
        <svg
          key={`f${i}`}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-yellow-400"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.954a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.953c.3.92-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.198-1.54-1.118l1.287-3.953a1 1 0 00-.364-1.118L2.062 9.381c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
      {half && (
        <svg
          width={size}
          height={size}
          viewBox="0 0 20 20"
          className="text-yellow-400"
        >
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.954a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.953c.3.92-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.198-1.54-1.118l1.287-3.953a1 1 0 00-.364-1.118L2.062 9.381c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z"
          />
        </svg>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <svg
          key={`e${i}`}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          className="text-gray-300"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.954a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.953c.3.92-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.198-1.54-1.118l1.287-3.953a1 1 0 00-.364-1.118L2.062 9.381c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
    </div>
  );
};

const Booksingle = ({ book, idx }) => {
  return (
    <motion.article
      key={book.id ?? idx}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.02, y: -6 }}
      whileTap={{ scale: 0.985 }}
      className="relative overflow-hidden rounded-3xl p-8 transform-gpu flex flex-col bg-white shadow-lg"
      role="article"
      aria-labelledby={`book-${idx}-title`}
    >
      {/* Book image centered like your screenshot */}
      <div className="w-full flex justify-center">
        <div className="w-36 h-44 sm:w-40 sm:h-52 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
          <img
            src={book.image}
            alt={`${book.title} cover`}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Title + meta (left aligned under image, like screenshot) */}
      <div className="mt-6 flex-1 flex flex-col justify-between">
        <div>
          <h3
            id={`book-${idx}-title`}
            className="text-lg sm:text-xl font-extrabold text-gray-900 leading-tight"
          >
            {book.title}
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            {book.category ?? book.author}
          </p>

          <div className="mt-3 flex items-center gap-2">
            <Stars rating={book.rating ?? 4.2} />
            <span className="text-sm text-gray-500">
              ({book.reviews ?? 120})
            </span>
          </div>
        </div>

        {/* CTA area - centered pill button like screenshot */}
        <div className="mt-6">
          <a
            href={book.readLink ?? "#"}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gray-700 hover:bg-gray-500  text-white text-sm font-semibold shadow-md transition"
            aria-label={`Start reading ${book.title}`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="inline-block"
            >
              <path
                d="M3 7v10a2 2 0 002 2h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 7V5a2 2 0 012-2h6a2 2 0 012 2v2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 12l3 2.25L16 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Start Reading
          </a>

          {/* optional small View link below button (centered) */}
          <div className="mt-3 text-center">
            <a
              href={book.link ?? "#"}
              className="text-sm text-gray-600 hover:underline"
            >
              View collection
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default Booksingle;
