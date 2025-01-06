import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg"; // Import the Logo component

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

  return (
    <nav className="flex justify-between items-center container left-[50%] translate-x-[-50%] md:px-10 fixed py-3 z-50 ">
      {/* Logo */}
      <div>
        <img className="w-9" src={Logo} alt="" />
      </div>

      {/* Links */}
      <div>
        <ul className="flex gap-12">
          {navlinks.map((link, idx) => {
            const lastIdx = navlinks.length - 1;
            return (
              <li className="flex items-center gap-12" key={idx}>
                <NavLink to={link.path}>
                  <div className="uppercase font-semibold text-white text-sm">
                    {link.name}
                  </div>
                </NavLink>
                {idx !== lastIdx && (
                  <div className="w-[5px] h-[5px] bg-red-600 rounded-full"></div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
