import { navLinks, socialMedia } from "@/components/website/data.jsx";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-5">
        <div className="container">
          <div className="md:flex justify-between items-center">
            <Link to="/" className="uppercase text-3xl block text-center">
              EASYMEALS
            </Link>

            <ul className="flex gap-3 justify-center">
              {socialMedia.map((item, key) => {
                return (
                  <li className="opacity-60" key={key}>
                    <Link to={item.url}>{item.icon}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
