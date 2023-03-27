import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { AnimatePresence, motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";

const Link = ({
  page,
  number,
  isStyles,
  selectedPage,
  setSelectedPage,
  handleClick,
}) => {
  const styles = `hover:text-slate-200 pr-2   cursor-pointer hover:border-b-2 pb-2 hover:border-teal-500 transition-all duration-200 `;
  const lowerPage = page.toLowerCase();
  const onClickHandler = (page) => {
    setSelectedPage(page);
    handleClick && handleClick();
  };
  return (
    <AnchorLink
      className={`${isStyles && styles} ${
        selectedPage === lowerPage &&
        "border-b-2 border-teal-500 text-slate-200"
      }`}
      href={"#" + lowerPage}
      onClick={() => onClickHandler(lowerPage)}
    >
      <span className="text-teal-500 mr-1">{number}.</span> {page}
    </AnchorLink>
  );
};

const Navbar = ({ selectedPage, setSelectedPage, screen }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      {screen > 850 && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <ul className="uppercase flex gap-3 text-base font-bold  mr-4">
            <Link
              page="home"
              number="01"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isStyles
            />
            <Link
              page="about"
              number="02"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isStyles
            />
            <Link
              page="skills"
              number="03"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isStyles
            />
            <Link
              page="projects"
              number="04"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isStyles
            />
            <Link
              page="contact"
              number="05"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isStyles
            />
          </ul>
        </motion.nav>
      )}
      {screen <= 850 && (
        <GiHamburgerMenu
          className="mr-4 text-3xl cursor-pointer"
          onClick={() => {
            setShowSidebar(true);
          }}
        />
      )}

      {screen <= 850 && (
        <AnimatePresence>
          {" "}
          {showSidebar && (
            <motion.nav
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              exit={{ x: "100vw" }}
              transition={{ duration: 0.6, type: "spring" }}
              className="fixed top-0 right-0 w-full h-screen z-50 bg-black/70 backdrop-blur-sm"
            >
              <div
                className="flex justify-end text-white text-5xl mr-6 mt-5 cursor-pointer"
                onClick={() => setShowSidebar(false)}
              >
                &times;
              </div>

              <div className="w-full h-full flex text-3xl uppercase gap-7 mt-11 text-white items-center flex-col">
                <Link
                  page="home"
                  number="01"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  handleClick={() => setShowSidebar(false)}
                />
                <Link
                  page="about"
                  number="02"
                  selectedPage={selectedPage}
                  handleClick={() => setShowSidebar(false)}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="skills"
                  number="03"
                  selectedPage={selectedPage}
                  handleClick={() => setShowSidebar(false)}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="projects"
                  number="04"
                  selectedPage={selectedPage}
                  handleClick={() => setShowSidebar(false)}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="contact"
                  number="05"
                  selectedPage={selectedPage}
                  handleClick={() => setShowSidebar(false)}
                  setSelectedPage={setSelectedPage}
                />
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default Navbar;
