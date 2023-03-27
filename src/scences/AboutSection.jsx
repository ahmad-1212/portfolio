import React from "react";
import img from "../assets/ahmad.jpg";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="w-5/6 m-auto py-[5rem] flex items-center flex-col-reverse sm:flex-row gap-[3rem]"
    >
      <div className="sm:basis-2/4 ">
        <h5 className="font-bold text-2xl text-slate-200 mb-6 sm:mb-9 font-playfair">
          <span className="mr-2 text-base text-teal-500 font-bold font-opensans">
            02.
          </span>{" "}
          About Me
        </h5>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[14px] flex flex-col gap-3"
        >
          <p>
            Hi there! I'm a passionate frontend developer with a strong eye for
            design and a deep love for clean, efficient code. Based in Pakistan,
            I've been bringing ideas to life on the web. From responsive layouts
            to interactive animations, I'm always looking for ways to push the
            boundaries of what's possible with frontend web development.
          </p>
          <p className="3 hidden md:block">
            {" "}
            Whether it's a small personal project or a large-scale enterprise
            application, I take pride in delivering elegant, high-quality
            solutions that meet both the client's needs and the user's
            expectations. I'm proficient in a variety of frontend technologies,
            including HTML, CSS, JavaScript and React, and I'm always eager to
            learn more.
          </p>{" "}
          <p>
            If you're looking for a frontend developer who is passionate,
            driven, and dedicated to delivering high-quality solutions, then
            look no further! I'm excited to collaborate with you and bring your
            vision to life. Let's create something amazing together. Thanks.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px]  opacity-90 z-0 relative rounded-sm before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-teal-500 before:opacity-40 before:z-10
      after:w-full after:h-full after:absolute after:border-2 after:border-teal-500 after:top-[20px] after:left-[20px] after:-z-10 after:rounded"
      >
        <img
          src={img}
          alt="Ahmad"
          className="w-full h-full object-cover rounded"
        />
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
