import { navLinks } from "@/components/website/data.jsx";
import { Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => {
    setShow((prev) => !prev);
  };

  return (
    <header className="bg-gray-100 py-5 ">
      <div className="container">
        <div className="flex justify-between items-center ">
          <Link to="/" className="uppercase text-3xl">
            EASYMEALS
          </Link>
          <nav
            className={`fixed md:static top-[76px] w-full md:w-auto  h-[calc(100vh-76px)] md:h-auto   border-t-gray-400 border-t-2 md:border-t-0  transition-all duration-300 z-50 ${
              show ? "left-0" : "-left-full"
            }`}
          >
            <ul className="md:flex justify-center items-center gap-14 uppercase font-bold opacity-80 mt-20 md:mt-0 space-y-14 md:space-y-0">
              {navLinks.map((item, key) => {
                return (
                  <li key={key} className="text-center text-2xl md:text-base">
                    <Link to={`${item.url}`}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
