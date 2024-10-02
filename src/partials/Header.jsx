import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white py-5">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/" className="uppercase text-3xl">
            EASYMEALS
          </Link>
          <nav>
            <ul className="flex justify-center items-center gap-24 uppercase font-bold opacity-80 ">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Recipes</Link>
              </li>

              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
