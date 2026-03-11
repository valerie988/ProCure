import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Partners", path: "/partners" },
    { name: "Contact", path: "/contacts" },
  ];

  return (
    <nav className="fixed top-6 left-0 w-full flex justify-center z-50">
      <div className="w-[95%] max-w-7xl bg-white/80 backdrop-blur-md shadow-md rounded-2xl px-6">
        
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-blue-600 tracking-tight"
          >
            <img src="/images/logo1.png" alt="" className="w-29"  />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-20">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition duration-300 
                  ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    {/* Animated underline */}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 text-xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-6 pt-4 flex flex-col space-y-4">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

          

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;