import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import sass from "../assets/sass.png";
import react from "../assets/react.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import materialui from "../assets/materialui.png";
import redux from "../assets/redux.png";
import framer from "../assets/framer motion.png";
import { motion } from "framer-motion";

const SkillSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className=" w-5/6 m-auto py-[6rem] sm:py-[10rem]"
      id="skills"
    >
      <h5 className="font-bold text-2xl text-slate-200 mb-10 sm:mb-[6rem]  font-playfair">
        <span className="mr-2 text-base text-teal-500 font-bold font-opensans">
          03.
        </span>{" "}
        My Skills
      </h5>
      <div className="grid grid-cols-3 items-center justify-items-center md:grid-cols-4 gap-11 opacity-70">
        <img src={html} alt="html" className="h-[50px] sm:h-[70px]" />
        <img src={css} alt="css" className="h-[50px] sm:h-[70px]" />
        <img
          src={javascript}
          alt="javascript"
          className="h-[50px] sm:h-[70px]"
        />
        <img src={sass} alt="sass" className="h-[50px] sm:h-[70px]" />
        <img src={react} alt="react" className="h-[50px] sm:h-[70px]" />
        <img src={redux} alt="redux" className="h-[50px] sm:h-[70px]" />
        <img src={bootstrap} alt="bootstrap" className="h-[50px] sm:h-[70px]" />
        <img
          src={materialui}
          alt="material ui"
          className="h-[40px] sm:h-[60px]"
        />
        <img src={tailwind} alt="tailwind" className="h-[40px] sm:h-[60px]" />
        <img
          src={framer}
          alt="framer motion"
          className="h-[50px] sm:h-[70px]"
        />
        <img src={git} alt="git" className="h-[60px] sm:h-[85px]" />
        <img src={github} alt="github" className="h-[80px] sm:h-[100px]" />
      </div>
    </motion.section>
  );
};

export default SkillSection;
