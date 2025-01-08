import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg"; // Import the Logo component
import { motion } from "motion/react";
import { useState } from "react";

const Navbar = () => {
  const navlinks = [
    { path: "/", name: "Home" },
    { path: "/about-me", name: "About Me" },
    { path: "/projects", name: "Projects" },
    { path: "/skills", name: "Skills" },
    { path: "/experience", name: "Experience" },
    { path: "/contact", name: "Contact" },
    { path: "/resume", name: "Resume" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center container left-[50%] translate-x-[-50%] md:px-10 px-4 fixed py-3 z-50 prosto text-xs">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <img className="md:w-9 w-6" src={Logo} alt="" />
      </motion.div>

      {/* Links */}
      <div>
        <ul className="flex gap-12">
          {navlinks.map((link, idx) => {
            const lastIdx = navlinks.length - 1;
            return (
              <>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: idx * 0.05 }}
                  className="lg:flex items-center gap-12 hidden"
                  key={idx}
                >
                  <NavLink to={link.path}>
                    <div className="uppercase  text-white ">{link.name}</div>
                  </NavLink>
                  {idx !== lastIdx && (
                    <div className="w-[5px] h-[5px] bg-red-900 rounded-full"></div>
                  )}
                </motion.li>
              </>
            );
          })}
        </ul>
      </div>

      {/* mobile nav */}

      <div onClick={() => setIsOpen(!isOpen)} className="space-y-1">
        <motion.div
          animate={isOpen ? "open" : "closed"}
          initial={"closed"}
          variants={{
            open: {
              y: 6,
              rotate: -45,
            },
          }}
          className="w-4 h-[2px] bg-white "
        ></motion.div>
        <motion.div
          animate={isOpen ? "open" : "closed"}
          initial={"closed"}
          variants={{
            open: {
              rotate: -45,
            },
          }}
          className="w-4 h-[2px] bg-white "
        ></motion.div>
        <motion.div
          animate={isOpen ? "open" : "closed"}
          initial={"closed"}
          variants={{
            open: {
              y: -6,
              rotate: 45,
            },
          }}
          className="w-4 h-[2px] bg-white "
        ></motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
