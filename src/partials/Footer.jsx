import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-5">
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

            <ul className="flex gap-3 justify-center">
              <li className="opacity-60">
                <Link to="/">
                  <Facebook strokeWidth={1} size={18} />
                </Link>
              </li>
              <li className="opacity-60">
                <Link to="/">
                  <Twitter strokeWidth={1} size={18} />
                </Link>
              </li>
              <li className="opacity-60">
                <Link to="/">
                  <Youtube strokeWidth={1} size={18} />
                </Link>
              </li>
              <li className="opacity-60">
                <Link to="/">
                  <Instagram strokeWidth={1} size={18} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
