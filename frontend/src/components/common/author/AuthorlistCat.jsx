import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";

const AuthorListCat = ({ author }) => {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center text-center p-6 pb-10 "
    >
      <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg  bg-gray-100 lg:w-70 lg:h-70">
        {author.image ? (
          <img
            src={author.image}
            alt={`${author.name} avatar`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            No image
          </div>
        )}

        <div
          className="absolute inset-0 rounded-full ring-1 ring-black/5"
          aria-hidden
        />

        <div className="pointer-events-auto">
          <a
            href={author.igurl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${author.name} on Instagram`}
            className="absolute bottom-1 left-1/2 transform -translate-x-full translate-y-1/4"
            style={{
              translate: "-70% 10%",
              rotate: "-20deg",
            }}
          >
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-2 shadow-sm w-9 h-9 flex items-center justify-center hover:scale-110">
              <FaInstagram style={{ color: "#E4405F" }} />
            </div>
          </a>

          {/* Right icon */}
          <a
            href={author.lnurl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${author.name} on LinkedIn`}
            className="absolute bottom-1 left-1/2 transform translate-x-0 translate-y-1/4"
            style={{
              translate: "10% 10%",
              rotate: "20deg",
            }}
          >
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-2 shadow-sm w-9 h-9 flex items-center justify-center hover:scale-110">
              <TbBrandLinkedin style={{ color: "#0A66C2" }} />
            </div>
          </a>
        </div>
      </div>

      {/* Name & career */}
      <motion.h1 className="mt-5 text-lg font-semibold">
        {author.name}
      </motion.h1>
      <motion.p className="text-sm text-gray-600 mt-1">
        {author.career}
      </motion.p>
    </motion.div>
  );
};

export default AuthorListCat;
