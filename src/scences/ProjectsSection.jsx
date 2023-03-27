import React from "react";
import recipe from "../assets/recipe-app.png";
import movie from "../assets/movie-hub.jpg";
import youtube from "../assets/youtube-clone.jpg";
import natours from "../assets/natours.png";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

const fadeIn = (value) => ({
  hidden: {
    x: value,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
    },
  },
});

const ProjectsSection = () => {
  return (
    <section id="projects" className=" w-5/6 m-auto py-8">
      <h5 className="font-bold text-2xl text-slate-200 mb-10 sm:mb-[6rem] font-playfair ">
        <span className="mr-2 text-base text-teal-500 font-bold font-opensans">
          04.
        </span>{" "}
        My Projects
      </h5>
      <div className="flex flex-col gap-[8rem]">
        <figure className="flex flex-col items-center lg:items-stretch lg:flex-row gap-8">
          <motion.img
            variants={fadeIn(-60)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            src={recipe}
            alt="recipe app"
            className="w-[400px]  rounded opacity-70 object-cover"
          />
          <motion.figcaption
            className="flex flex-col items-center lg:items-start"
            variants={fadeIn(60)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="font-bold text-3xl text-slate-300 uppercase mb-6 font-playfair">
              Recipe App
            </h3>
            <p className="text-[12px] sm:text-[15px] text-center lg:text-start text">
              A Recipe app build with React js and Firebase (as a backend).
              Where user can search for recipe and bookmark a recipe. In this
              app user can make an account using Firebase authentication, If you
              have created an account, you can add a recipe and view your own
              recipe. No one else will be able to view your recipe except you.
            </p>
            <p className="mt-5 text-slate-200 uppercase mb-2">
              Technoligies used are:
            </p>
            <div className="flex gap-x-4 justify-center font-bold flex-wrap">
              <span>React js,</span>
              <span>Tailwind,</span>
              <span>Firebase,</span>
              <span>Framer Motion,</span>
              <span>Formik</span>
            </div>
            <div className="mt-5 flex gap-5">
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ delay: 0.8, duration: 0.2 }}
                href="https://recipe-app-38737.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center font-bold gap-3 py-3 px-7 border-2 w-fit text-teal-500 border-teal-400 hover:text-slate-200 hover:bg-teal-500 transition-all duration-300 text-[14px] rounded uppercase"
              >
                <span> Checkout </span>
                <BsBoxArrowUpRight />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ delay: 1, duration: 0.2 }}
                href="https://github.com/ahmad-1212/recipe-app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center font-bold gap-3 py-3 px-7 border-2 w-fit text-teal-500 border-teal-400 hover:text-slate-200 hover:bg-teal-500 transition-all duration-300 text-[14px] rounded uppercase"
              >
                <span> Github </span>
                <AiFillGithub className="text-xl" />
              </motion.a>
            </div>
          </motion.figcaption>
        </figure>
        <figure className="flex flex-col items-center lg:items-stretch lg:flex-row gap-8">
          <motion.img
            variants={fadeIn(60)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            src={movie}
            alt="movie app"
            className="w-[500px]  rounded lg:order-2 object-cover"
          />
          <motion.figcaption
            className="flex flex-col items-center lg:items-start"
            variants={fadeIn(-60)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="font-bold text-3xl text-slate-300 uppercase mb-6 font-playfair">
              Movie App
            </h3>
            <p className="text-[12px] sm:text-[15px] text-center lg:text-start text">
              Movie hub is best movie app build with React js and TMDB (The
              Movie Data Base) API. In this app user can search for movies or TV
              series and can view it's detail and also can watch a trailer of
              the movie. It's a dual theme application user can switch between
              dark and light theme, and this theme functionality was build using
              material ui.
            </p>
            <p className="mt-5 text-slate-200 uppercase mb-2">
              Technoligies used are:
            </p>
            <div className="flex gap-x-4 justify-center font-bold flex-wrap">
              <span>React js,</span>
              <span>Material UI,</span>
              <span>TMDB (The Movie Data Base) API.</span>
            </div>
            <div className="mt-5 flex gap-5">
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ delay: 0.8, duration: 0.2 }}
                href="https://react-movie-app-1212.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center font-bold gap-3 py-3 px-7 border-2 w-fit text-teal-500 border-teal-400 hover:text-slate-200 hover:bg-teal-500 transition-all duration-300 text-[14px] rounded uppercase"
              >
                <span> Checkout </span>
                <BsBoxArrowUpRight />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ delay: 1, duration: 0.2 }}
                href="https://github.com/ahmad-1212/movie-app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center font-bold gap-3 py-3 px-7 border-2 w-fit text-teal-500 border-teal-400 hover:text-slate-200 hover:bg-teal-500 transition-all duration-300 text-[14px] rounded uppercase"
              >
                <span> Github </span>
                <AiFillGithub className="text-xl" />
              </motion.a>
            </div>
          </motion.figcaption>
        </figure>
        <figure className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
          <motion.img
            variants={fadeIn(-60)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            src={youtube}
            alt="video sharing app"
            className="w-[500px] rounded object-fill"
          />
          <motion.figcaption
            className="flex flex-col items-center lg:items-start"
            variants={fadeIn(60)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="font-bold text-3xl text-slate-300 uppercase mb-6 font-playfair">
              Video Sharing app
            </h3>
            <p className="text-[12px] sm:text-[15px] text-center lg:text-start text">
              Youtube clone using React js and Rapid API. A beautifull youtube
              clone where user can search for a video or channel and watch it
              with react player (youtube player). This app is the best example
              of API integration.
            </p>
            <p className="mt-5 text-slate-200 uppercase mb-2">
              Technoligies used are:
            </p>
            <div className="flex gap-x-4 justify-center font-bold flex-wrap">
              <span>React js,</span>
              <span>Rapid API</span>
            </div>
            <div className="mt-5 flex gap-5">
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ delay: 0.8, duration: 0.2 }}
                href="https://u-videos.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center font-bold gap-3 py-3 px-7 border-2 w-fit text-teal-500 border-teal-400 hover:text-slate-200 hover:bg-teal-500 transition-all duration-300 text-[14px] rounded uppercase"
              >
                <span> Checkout </span>
                <BsBoxArrowUpRight />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ delay: 1, duration: 0.2 }}
                href="https://github.com/ahmad-1212/youtube-clone"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center font-bold gap-3 py-3 px-7 border-2 w-fit text-teal-500 border-teal-400 hover:text-slate-200 hover:bg-teal-500 transition-all duration-300 text-[14px] rounded uppercase"
              >
                <span> Github </span>
                <AiFillGithub className="text-xl" />
              </motion.a>
            </div>
          </motion.figcaption>
        </figure>
        <figure className="flex flex-col items-center lg:items-stretch lg:flex-row gap-8">
          <motion.img
            variants={fadeIn(60)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            src={natours}
            alt="recipe app"
            className="w-[500px] rounded lg:order-2 object-contain opacity-80"
          />
          <motion.figcaption
            className="flex flex-col items-center lg:items-start"
            variants={fadeIn(-60)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="font-bold text-3xl text-slate-300 uppercase mb-6 font-playfair">
              Natours Website
            </h3>
            <p className="text-[12px] sm:text-[15px] text-center lg:text-start text">
              An eye catching UI UX website for Natours. It is the best UI UX
              webiste build with HTML, CSS and SASS (css preprocessor)
            </p>
            <p className="mt-5 text-slate-200 uppercase mb-2">
              Technoligies used are:
            </p>
            <div className="flex gap-x-4 justify-center font-bold flex-wrap">
              <span>HTML,</span>
              <span>CSS,</span>
              <span>SASS,</span>
            </div>
            <div className="mt-5 flex gap-5">
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ delay: 0.8, duration: 0.2 }}
                href="https://natours1212.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center font-bold gap-3 py-3 px-7 border-2 w-fit text-teal-500 border-teal-400 hover:text-slate-200 hover:bg-teal-500 transition-all duration-300 text-[14px] rounded uppercase"
              >
                <span> Checkout </span>
                <BsBoxArrowUpRight />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ delay: 1, duration: 0.2 }}
                href="https://github.com/ahmad-1212/Natours"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center font-bold gap-3 py-3 px-7 border-2 w-fit text-teal-500 border-teal-400 hover:text-slate-200 hover:bg-teal-500 transition-all duration-300 text-[14px] rounded uppercase"
              >
                <span> Github </span>
                <AiFillGithub className="text-xl" />
              </motion.a>
            </div>
          </motion.figcaption>
        </figure>
      </div>
    </section>
  );
};

export default ProjectsSection;
