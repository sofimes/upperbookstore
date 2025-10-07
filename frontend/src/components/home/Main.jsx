import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Main = () => {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const scale = useTransform(scrollY, [0, 300], [1, 0.25]);
  const y = useTransform(scrollY, [0, 300], [0, 120]);
  const x = useTransform(scrollY, [0, 100], [0, 0]);

  const navY = useTransform(scrollY, [0, 150], [-100, 0]);

  return (
    <div className=" w-full overflow-x-hidden">
      <motion.div
        style={{ scale, y, x }}
        className="sticky top-1 flex flex-col text-center justify-center items-center md:pt-60 sm:pt-32 pt-20 relative"
      >
        <motion.div
          initial={{ scale: 0.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="select-none text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold flex justify-center items-center"
        >
          <motion.div
            initial={{ scale: 0.2 }}
            animate={{ scale: 1 }}
            transition={{
              type: "tween",
              duration: 1,
              ease: [0.34, 1.4, 0.64, 1],
            }}
            className="flex  gap-3 justify-center md:justify-start md:pl-12 lg:pl-20"
          >
            <span className="text-amber-300">Upper</span>
            <span className="text-gray-500">Book</span>
          </motion.div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 text-center text-gray-700 text-sm sm:text-base md:text-lg max-w-xl px-4 leading-relaxed tracking-wide"
        >
          <span className="block text-amber-400 font-semibold text-lg mb-2">
            Your Gateway to Knowledge.
          </span>
          <span className="text-gray-600">
            Discover inspiring stories and timeless books at{" "}
            <span className="font-semibold text-amber-400">Upper Book</span>.
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Main;
