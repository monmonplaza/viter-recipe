import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const AsideSocialMedia = () => {
  return (
    <>
      <div className="aside-box bg-dark text-light p-5 text-center mb-10">
        <h4>Follow me</h4>

        <ul className="flex gap-3 justify-center">
          <li>
            <Link to="/">
              <Facebook />
            </Link>
          </li>
          <li>
            <Link to="/">
              <Twitter />
            </Link>
          </li>
          <li>
            <Link to="/">
              <Youtube />
            </Link>
          </li>
          <li>
            <Link to="/">
              <Instagram />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AsideSocialMedia;
