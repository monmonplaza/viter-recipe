import { devBaseImgUrl } from "@/components/helpers/functions-general.jsx";
import { categories } from "@/components/website/data.jsx";
import React from "react";
import { Link } from "react-router-dom";

const AsideCategory = () => {
  return (
    <>
      <div className="aside-box p-5 mb-10 bg-gray-50">
        <h4>Category</h4>
        <ul className="grid grid-cols-2 gap-3 ">
          {categories.map((item, key) => {
            return (
              <li
                className="group justify-self-center relative bg-dark "
                key={key}
              >
                <Link to={`/category/${item.category_slug}`}>
                  <img
                    src={`${devBaseImgUrl}/${item.category_thumbnail}`}
                    alt=""
                    className="h-full w-full object-cover group-hover:opacity-50 transition-all"
                  />
                  <span className="text-white group-hover:opacity-100 transition-all opacity-0 text-xs absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
                    {item.category_name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default AsideCategory;
