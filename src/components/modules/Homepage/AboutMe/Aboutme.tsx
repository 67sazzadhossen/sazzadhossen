import { motion } from "motion/react";
import profile from "../../../../assets/profile_transparent.png";
import { IoMdArrowDropdown } from "react-icons/io";

const Aboutme = () => {
  return (
    <div className=" my-bg-reverse">
      <div className="text-white flex flex-col items-center justify-center container mx-auto min-h-screen">
        {/* background */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 5 }}
          viewport={{ once: false }}
          className="md:w-9/12 w-full opacity-30 h-[80vh] bg-no-repeat bg-cover bg-[url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMThiYXRjaDcta2F0aWUtNTEuanBn.jpg')] rounded-2xl absolute "
        ></motion.div>

        {/* description div*/}
        <div className="z-40 flex flex-col lg:flex-row items-center">
          {/* profile image */}
          <div className="lg:w-1/2">
            <motion.img
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: false }}
              src={profile}
              alt=""
            />
          </div>

          {/* description */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-white w-11/12 lg:w-1/3 space-y-10 pb-20 lg:pb-0"
          >
            <h1 className="text-5xl uppercase font-bold">About Me</h1>
            <p>
              Hi, I`m Md Sazzad Hossen – a passionate Full Stack Web Developer
              with a focus on building dynamic and user-centric web
              applications. With expertise in the MERN stack, I strive to craft
              intuitive and scalable solutions that deliver results. Whether
              it`s front-end with React, back-end with Node.js, or managing
              databases with MongoDB, I’m always excited to tackle new
              challenges and help clients bring their ideas to life.
            </p>
            <div className="text-xl space-y-3 flex  flex-col items-center md:w-1/3">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: 5 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              >
                <IoMdArrowDropdown className="" />
              </motion.div>
              <button className="uppercase tracking-widest font-bold">
                View Details
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
