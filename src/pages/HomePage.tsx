import banner from "../assets/banner.png";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-bl from-blue-800 to-my-bg relative flex flex-col justify-center items-center">
      <div className="absolute">
        <motion.img
          initial={{ scale: 2, rotate: -5, rotateZ: -15 }}
          animate={{ scale: 2.2, rotate: 15, rotateZ: 15 }}
          transition={{
            duration: 17, // Animation duration
            repeat: Infinity, // Repeat infinitely
            repeatType: "mirror", // Reverse animation direction on repeat
            ease: "easeInOut", // Smooth easing
          }}
          src={banner}
          className="w-1/3 mx-auto "
          alt="Banner Logo"
        />
      </div>
      <div className="text-white w-2/3 z-40 text-center space-y-4">
        <h4 className="text-3xl uppercase font-bold">Md Sazzad Hossen</h4>
        <h1 className="text-5xl uppercase font-bold">
          Full Stack Web Developer
        </h1>
        <p className="font-semibold">
          I am a full-stack web developer skilled in React.js , Next.js,
          Node.js, Express.js, MongoDB, JavaScript etc. I specialize in building
          scalable web applications with responsive interfaces and robust
          server-side functionality. Proficient in RESTful APIs, database
          management, and tools like Git, I deliver efficient and high-quality
          solutions.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
