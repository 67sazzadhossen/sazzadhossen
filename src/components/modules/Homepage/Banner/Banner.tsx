import { motion } from "motion/react";
import Scene from "./Scene";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";
import { GrDown } from "react-icons/gr";

const Banner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-800 to-my-bg relative flex flex-col justify-center items-center pt-12 md:pt-0">
      {/* animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: false }}
        className="lg:absolute"
      >
        <Scene />
      </motion.div>

      {/* description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: false }}
        className="text-white md:w-2/3 z-40 text-center space-y-4 prosto px-4 md:px-0"
      >
        <h4 className="md:text-xl uppercase font-bold tracking-widest">
          Md Sazzad Hossen
        </h4>
        <h1 className="md:text-5xl uppercase font-bold tracking-widest">
          Full Stack Web Developer
        </h1>
        <p className="">
          I am a full-stack web developer skilled in React.js , Next.js,
          Node.js, Express.js, MongoDB, JavaScript etc. I specialize in building
          scalable web applications with responsive interfaces and robust
          server-side functionality. Proficient in RESTful APIs, database
          management, and tools like Git, I deliver efficient and high-quality
          solutions.
        </p>
      </motion.div>

      {/* icons */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.05 }}
        className="z-40 flex justify-center gap-6 text-4xl mt-4 text-white"
      >
        <MdEmail />
        <BsGithub />
        <LiaLinkedin />
        <FaFacebook />
      </motion.div>

      {/* sroll down */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.06 }}
      >
        <motion.div
          initial={{ y: -5 }}
          animate={{ y: 30 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
            ease: "backIn",
          }}
          className="z-40 flex flex-col gap-4 items-center text-xl mt-16 text-white"
        >
          <div className="text-sm">Scroll Down</div>
          <div className="flex flex-col items-center">
            {/* First arrow */}
            <motion.div
              initial={{ y: -5 }}
              whileInView={{ y: 30 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                ease: "backIn",
                delay: 0, // No delay for the first arrow
              }}
            >
              <GrDown />
            </motion.div>
            {/* Second arrow */}
            <motion.div
              initial={{ y: -5 }}
              animate={{ y: 35 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                ease: "backIn",
                delay: 0.2, // Delayed animation for the second arrow
              }}
            >
              <GrDown />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
