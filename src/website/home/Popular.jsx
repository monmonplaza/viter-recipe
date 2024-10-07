import { devBaseImgUrl } from "@/helper/functions-general.jsx";
import React from "react";
import { Link } from "react-router-dom";
import { recipes } from "../data.jsx";

const Popular = () => {
  const allPopular = recipes.filter((item) => {
    return item.recipe_isFeature !== true && item.recipe_isBanner !== true;
  });

  return (
    <section className="py-24 bg-dark text-light">
      <div className="container">
        <h2 className="text-center mb-10">Most Popular Recipes</h2>
        <div className="grid md:grid-cols-5 gap-5">
          {allPopular.slice(0, 5).map((item, key) => {
            return (
              <div className="capitalize" key={key}>
                <img
                  src={`${devBaseImgUrl}/${item.recipe_thumbnail}`}
                  alt=""
                  className="w-full min-h-[200px] object-cover mb-2"
                />
                <Link
                  to={`/recipe/${item.recipe_slug}`}
                  className="font-suraMedium font-bold hover:text-accent text-base text-center block "
                >
                  {item.recipe_title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
