// Loader.jsx
import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // simulate loading time or use actual loading logic if needed
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0f0f0f] overflow-hidden"
        >
          {/* glowing background circles */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute w-[300px] h-[300px] rounded-full bg-[#e86b40]/30 blur-[120px]"
          ></motion.div>

          {/* animated text */}
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.8, 1.05, 1],
              opacity: [0, 1, 1],
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
            className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-[#ffb07a] tracking-wider text-center font-anton"
          >
            Kisse Kahaniyan
          </motion.h1>

          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: [50, -10, 0],
              opacity: [0, 1, 1],
            }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: "easeOut",
            }}
            className="relative z-10 text-xl sm:text-2xl md:text-3xl mt-4 text-[#f3e8df] font-medium text-center"
          >
            with <motion.span
              animate={{
                rotate: [0, -5, 5, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: 1.8,
              }}
              className="inline-block text-[#e86b40] font-semibold"
            >
              Chacha Ji 
            </motion.span>
          </motion.h2>

          {/* small bouncing dot effect */}
          <motion.div
            className="mt-10 flex gap-2"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  repeat: Infinity,
                  repeatDelay: 0.6,
                },
              },
            }}
          >
            {[1, 2, 3].map((i) => (
              <motion.span
                key={i}
                className="w-3 h-3 rounded-full bg-[#ffb07a]"
                variants={{
                  hidden: { y: 0 },
                  visible: {
                    y: [-6, 0],
                    transition: { yoyo: Infinity, duration: 0.6 },
                  },
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
