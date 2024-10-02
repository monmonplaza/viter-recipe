import { devBaseImgUrl } from "@/helper/functions-general.jsx";
import React from "react";
import { Link } from "react-router-dom";

const Popular = () => {
  return (
    <section className="py-24 bg-dark text-light">
      <div className="container">
        <h2 className="text-center mb-10">Most Popular Recipes this Week</h2>
        <div className="grid grid-cols-5 gap-5">
          <div className="capitalize">
            <img
              src={`${devBaseImgUrl}/pasta-1.jpg`}
              alt=""
              className="w-full mb-2"
            />
            <Link to="/" className="font-suraMedium font-bold ">
              Broad beans, garlic & feta brusschetra
            </Link>
          </div>

          <div className="capitalize">
            <img
              src={`${devBaseImgUrl}/pasta-1.jpg`}
              alt=""
              className="w-full mb-2"
            />
            <Link to="/" className="font-suraMedium font-bold ">
              Broad beans, garlic & feta brusschetra
            </Link>
          </div>

          <div className="capitalize">
            <img
              src={`${devBaseImgUrl}/pasta-1.jpg`}
              alt=""
              className="w-full mb-2"
            />
            <Link to="/" className="font-suraMedium font-bold ">
              Broad beans, garlic & feta brusschetra
            </Link>
          </div>

          <div className="capitalize">
            <img
              src={`${devBaseImgUrl}/pasta-1.jpg`}
              alt=""
              className="w-full mb-2"
            />
            <Link to="/" className="font-suraMedium font-bold ">
              Broad beans, garlic & feta brusschetra
            </Link>
          </div>

          <div className="capitalize">
            <img
              src={`${devBaseImgUrl}/pasta-1.jpg`}
              alt=""
              className="w-full mb-2"
            />
            <Link to="/" className="font-suraMedium font-bold ">
              Broad beans, garlic & feta brusschetra
            </Link>
          </div>

          <div className="capitalize">
            <img
              src={`${devBaseImgUrl}/pasta-1.jpg`}
              alt=""
              className="w-full mb-2"
            />
            <Link to="/" className="font-suraMedium font-bold ">
              Broad beans, garlic & feta brusschetra
            </Link>
          </div>

          <div className="capitalize">
            <img
              src={`${devBaseImgUrl}/pasta-1.jpg`}
              alt=""
              className="w-full mb-2"
            />
            <Link to="/" className="font-suraMedium font-bold ">
              Broad beans, garlic & feta brusschetra
            </Link>
          </div>

          <div className="capitalize">
            <img
              src={`${devBaseImgUrl}/pasta-1.jpg`}
              alt=""
              className="w-full mb-2"
            />
            <Link to="/" className="font-suraMedium font-bold ">
              Broad beans, garlic & feta brusschetra
            </Link>
          </div>

          <div className="capitalize">
            <img
              src={`${devBaseImgUrl}/pasta-1.jpg`}
              alt=""
              className="w-full mb-2"
            />
            <Link to="/" className="font-suraMedium font-bold ">
              Broad beans, garlic & feta brusschetra
            </Link>
          </div>
          <div className="capitalize">
            <img
              src={`${devBaseImgUrl}/pasta-1.jpg`}
              alt=""
              className="w-full mb-2"
            />
            <Link to="/" className="font-suraMedium font-bold ">
              Broad beans, garlic & feta brusschetra
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
