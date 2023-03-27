import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    setLoading(true);
    emailjs
      .send(
        "service_2uh70fj",
        "template_of5ilxw",
        {
          from_name: name,
          to_name: "Ahmad Ali",
          from_email: email,
          to_email: "ahmadali.swat333@gmail.com",
          message: message,
        },
        "Mi0KaE44mGAhr0aue"
      )
      .then(
        (result) => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong!");
        }
      );
  };

  const styles =
    "py-3 text-base px-2 bg-transparent border border-2 border-teal-500 block rounded w-full mt-2 text-slate-300";
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewpor={{ once: true, amount: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      id="contact"
      className="py-[6rem] w-10/12 sm:w-5/6 md:w-3/6 lg:w-6/12  m-auto"
    >
      <h5 className="font-bold text-2xl text-slate-200 mb-10 sm:mb-[3rem] text-center  font-playfair">
        <span className="mr-2 text-base text-teal-500 font-bold font-opensans">
          05.
        </span>{" "}
        Contact
      </h5>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
        <div>
          <label>Name</label>
          <input
            ref={nameRef}
            className={styles}
            type="text"
            placeholder="Enter your Name"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            ref={emailRef}
            className={styles}
            type="email"
            placeholder="Enter your Email"
            required
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            ref={messageRef}
            className={styles}
            rows="10"
            placeholder="Type Message"
            required
          />
        </div>

        <div className="">
          {!loading && (
            <button
              type="submit"
              className="border border-teal-500 py-3 px-11 rounded hover:bg-teal-500 hover:text-slate-200 uppercase font-bold transition-all duration-300"
            >
              Send
            </button>
          )}
          {loading && (
            <button
              type="submit"
              className="border border-teal-500 py-3 px-11 rounded uppercase font-bold transition-all duration-300 opacity-50"
            >
              Sending...
            </button>
          )}
        </div>
      </form>
    </motion.section>
  );
};

export default ContactSection;
