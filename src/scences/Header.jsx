import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Header = () => {
  const [selectedPage, setSlectedPage] = useState("home");
  const [screen, setScreen] = useState(null);

  useEffect(() => {
    setScreen(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = (e) => {
      setScreen(e.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screen]);

  return (
    <header className="flex justify-between py-6 w-full border-b-2 border-cyan-800 border-opacity-10 fixed top-0 left-0  bg-dark/90 z-50">
      <div className="w-[1280px] flex justify-between m-auto">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="font-bold text-xl ml-4 text-slate-300"
        >
          Ahmad.dev
        </motion.h3>

        <Navbar
          screen={screen}
          selectedPage={selectedPage}
          setSelectedPage={setSlectedPage}
        />
      </div>
    </header>
  );
};

export default Header;
