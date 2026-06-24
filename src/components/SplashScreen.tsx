import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Elegant splash screen with guaranteed visibility (2.5s)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-white"
        >
          <motion.img
            src={logo}
            alt="MPS Machinery Logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-[24rem] md:w-[32rem] object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
