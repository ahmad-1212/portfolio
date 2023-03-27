import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const fadeIn = (value) => {
  return {
    hidden: {
      x: value,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 40,
      },
    },
  };
};

const HomeSection = () => {
  const styles = "hover:text-teal-500 hover:scale-105 transition duration-300";

  return (
    <section
      className="mt-[3rem] py-[3rem] md:py-[7rem] w-full  m-auto px-3"
      id="home"
    >
      <div className="flex flex-col items-center w-11/12 sm:w-5/6 m-auto gap-6 ">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xs text-teal-500 font-bold sm:text-start"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          variants={fadeIn("-100vw")}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-6xl text-slate-200 font-bold sm:leading-tight text-center font-playfair uppercase"
        >
          Ahmad Ali, <br />{" "}
          <span className="text-slate-400 text-3xl sm:text-5xl md:text-6xl font-opensans normal-case">
            I am a Frontend developer
          </span>
        </motion.h1>
        <motion.p
          variants={fadeIn("100vw")}
          initial="hidden"
          animate="visible"
          className="text-[12px] sm:text-[14px] text-center  leading-[2]"
        >
          As a frontend developer based in Pakistan, my passion is bringing
          creative ideas to life on the web. I thrive on taking inspiration from
          the world around me and turning it into stunning and intuitive digital
          experiences that engage and delight users.
        </motion.p>

        <motion.div
          className="mt-4 sm:mt-7"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <AnchorLink
            href="#contact"
            className=" border-2 border-teal-500 text-teal-500 text-base py-3  px-8 rounded font-bold hover:text-white hover:bg-teal-500 transition duration-200"
          >
            Get in Touch
          </AnchorLink>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.4 }}
          className="flex gap-6 text-3xl text mt-11"
        >
          <a
            href="https://github.com/ahmad-1212 "
            target="_blank"
            rel="noopener noreferrer"
            className={styles}
          >
            <BsGithub />
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=100027887622434"
            target="_blank"
            rel="noopener noreferrer"
            className={styles}
          >
            <BsFacebook />
          </a>
          <a
            href="https://www.instagram.com/ahmad_ali5964/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles}
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmad-ali-789b8826b/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles}
          >
            <BsLinkedin />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
