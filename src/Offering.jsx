import React, { useEffect, useState } from "react";
import Loader from "./Page/Loader";
import star from "../Img/About/star-2.png";
import icon from "../Img/Home/icon.svg";
import icon2 from "../Img/About/icon2.png";
import bg from "../Img/About/bg1.png";
import sign from "../Img/About/sign.png";
import { motion } from "framer-motion";
import { IoCameraOutline, IoColorFilterOutline } from "react-icons/io5";
import { AiOutlineComment } from "react-icons/ai";
import { FcCollaboration } from "react-icons/fc";
import { PiPencilCircle } from "react-icons/pi";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { ImGithub, ImLinkedin } from "react-icons/im";
import { Link } from "react-router-dom";

const Offering = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  return (
    <>
      {loader && <Loader />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: loader ? 0.3 : 0,
        }}
        className="xl:container xl:mx-auto min-h-screen px-[1rem] md:px-[2rem]  xl:px-[4.5rem] pt-23 pb-20"
      >
        <section className="grid grid-cols-1 md:grid-cols-3  md:items-start gap-4 ">
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{
              duration: 0.8,
              delay: loader ? 0.5 : 0,
            }}
            className="py-13 sm:py-0 px-6 box bg-card-bg rounded-4xl max-h-screen my-6 overflow-hidden "
          >
            <ul className="grid grid-rows-5 uxsm:gap-40 uxxsm:gap-10 col-span-1 my-12 ">
              <li className="text-white uppercase flex items-center justify-center md:justify-start">
                <MdOutlineDeveloperMode className="text-3xl mr-8 lg:mr-14" />{" "}
                development
              </li>
              <li className="text-white uppercase flex items-center justify-center md:justify-start">
                <PiPencilCircle className="text-3xl mr-8 lg:mr-14" /> web
                designing
              </li>
              <li className="text-white uppercase flex items-center justify-center md:justify-start">
                <AiOutlineComment className="text-3xl mr-8 lg:mr-14" /> Client
                Communication
              </li>
              <li className="text-white uppercase flex items-center justify-center md:justify-start">
                <FcCollaboration className="text-3xl mr-8 lg:mr-14" />{" "}
                Collaboration with backend
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.8,
              delay: loader ? 0.5 : 0,
            }}
            className="col-span-2"
          >
            <h1 className="mb-10 z-40 lg:mb-4 text-3xl lg:text-5xl xl:text-7xl uppercase font-medium flex items-center justify-center gap-1.5 text-white  ">
              <img
                src={star}
                alt=""
                className="w-6 xl:w-16 z-40"
                aria-hidden="true"
              />{" "}
            <span className="z-40">  my offerings</span>
              <img
                src={star}
                alt=""
                className="w-6 xl:w-16 z-40"
                aria-hidden="true"
              />
            </h1>
            <div className="box bg-card-bg rounded-4xl py-6.5 px-7 grid items-start xl:grid-cols-2 gap-5">
              {/* <div className="box pt-6 pl-8 pr-12 pb-7">
                    <h3 className='text-card-para opacity-50 mb-2 font-medium text-base uppercase'>Photography</h3> 
                    <p className='text-card-para'>
                    Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus 
                    non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.
                    </p>
                </div> */}
              <div className="box pt-6 pl-8 pr-12 pb-7">
                <h3 className="text-card-para opacity-50 mb-2 font-medium text-base uppercase">
                  Development
                </h3>
                <p className="text-card-para">
                  {/* As an expert in web development, I offer a comprehensive range of services to create exceptional websites and web applications. With proficiency in HTML, CSS, JavaScript, Tailwind, React, APIs, responsive web design, and Bootstrap, I ensure that every project is delivered with the utmost precision and attention to detail. */}
                  Specializing in web development services, I leverage my skills
                  in HTML, CSS, JavaScript, React, Bootstrap, and Tailwind to
                  create dynamic and interactive websites. From concept to
                  deployment, I deliver high-quality solutions that enhance your
                  online presence and drive business growth.
                </p>
              </div>
              <div className="box pt-6 pl-8 pr-12 pb-7">
                <h3 className="text-card-para opacity-50 mb-2 font-medium text-base uppercase">
                  web designing
                </h3>
                <p className="text-card-para">
                  Delivering top-notch web design services, I can boasts a
                  wealth of expertise in HTML, CSS, JavaScript, React,
                  Bootstrap, and Tailwind. I specialize in the art of crafting
                  visually captivating and highly user-friendly websites,
                  precisely tailored to elevate your brand identity and engage
                  your target audience effectively.
                </p>
              </div>
              <div className="box pt-6 pl-8 pr-12 pb-7">
                <h3 className="text-card-para opacity-50 mb-2 font-medium text-base uppercase">
                  Client Communication
                </h3>
                <p className="text-card-para">
                  As a front-end developer, I'm committed to transparent and
                  effective client communication. I actively listen to your
                  ideas, provide regular updates, and address any questions or
                  concerns promptly. My aim is to seamlessly integrate your
                  vision into the web development process, exceeding your
                  expectations. I'm here to collaborate, gather feedback, and
                  align the project with your goals."
                </p>
              </div>
              <div className="box pt-6 pl-8 pr-12 pb-7">
                <h3 className="text-card-para opacity-50 mb-2 font-medium text-base uppercase">
                  Collaboration with backend
                </h3>
                <p className="text-card-para">
                  As a front-end developer skilled in Redux and RTK, I thrive on
                  collaborating closely with back-end developers to build
                  efficient web applications. I prioritize seamless
                  communication between front-end and back-end teams, ensuring a
                  cohesive and responsive user experience. Together, we'll
                  deliver a robust web project with a focus on functionality,
                  performance, and user satisfaction.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
        <section className="p-2.5 lg:items-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <motion.div
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: loader ? 0.1 : 0,
            }}
            className=" box bg-card-bg p-5 rounded-4xl "
          >
            <img
              src={bg}
              alt="background image"
              className="absolute top-0 left-0 object-cover mb-4 opacity-10"
            />
            <div className="box bg-card-bg p-4 mb-4 flex justify-center items-center gap-5 border border-dark rounded-4xl shadow">
              <a
                href="https://github.com/mhkhizil"
                target="_blank"
                className="h-16 w-16 rounded-full transition duration-500 border text-white hover:text-black hover:bg-white border-dark flex justify-center items-center shadow"
              >
                <ImGithub className="text-2xl " />
              </a>
              <a
                href="https://www.linkedin.com/in/thurein-zaw-62ab73291/"
                target="_blank"
                className="h-16 w-16 rounded-full border border-dark text-white hover:text-black hover:bg-white transition duration-500 flex justify-center items-center shadow"
              >
                <ImLinkedin className="text-2xl " />
              </a>
            </div>
            <div className="flex justify-between items-center">
              <div className="">
                <h4 className=" uppercase text-xs text-card-para opacity-50 mb-3 font-medium">
                  Stay with me
                </h4>
                <h1 className="text-lg font-medium text-white mb-2">Profile</h1>
              </div>
              <Link
                to={"/contact"}
                className="transition duration-300 text-card-para linkicon opacity-20"
              >
                <img src={icon} alt="" className="" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: loader ? 0.1 : 0,
            }}
            className="box pt-25 pb-10.5 px-5 col-span-1 lg:col-span-2 bg-card-bg rounded-4xl"
          >
            <img
              src={bg}
              alt="background image"
              className="absolute top-0 w-full left-0 object-cover mb-4 opacity-10"
            />
            <img src={icon2} alt="" className="absolute top-0" />
            <div className="flex justify-between items-end">
              <h1 className="font-medium text-white text-3xl lg:text-4xl ">
                Let's
                <br />
                Work <span className="text-primary">together.</span>
              </h1>

              <Link
                to={"/contact"}
                className="transition duration-300 linkicon text-card-para opacity-20 cursor-pointer"
              >
                <img src={icon} alt="" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: loader ? 0.1 : 0,
            }}
            className="box p-5 rounded-4xl bg-card-bg md:col-span-3 lg:col-span-1"
          >
            <img
              src={bg}
              alt="background image"
              className="absolute top-0 left-0 w-full object-cover mb-4 opacity-10"
            />
            <img
              src={sign}
              alt="sign image"
              className="mb-4 object-cover w-[75%] lg:max-w-none px-5"
            />
            <div className="flex justify-between items-center">
              <div className="">
                <h4 className=" uppercase text-xs text-card-para opacity-50 mb-3 font-medium">
                  More about me
                </h4>
                <h1 className="text-lg font-medium text-white mb-2">
                  History about me
                </h1>
              </div>
              <div>
                <Link
                  to={"/credential"}
                  className="linkicon transition duration-300 text-card-para opacity-20"
                >
                  <img src={icon} alt="" className="" />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </motion.div>
    </>
  );
};

export default Offering;
