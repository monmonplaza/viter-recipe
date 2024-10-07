import { devBaseImgUrl } from "@/helper/functions-general.jsx";
import MetaAuthor from "@/website/partials/MetaAuthor.jsx";
import MetaInfo from "@/website/partials/MetaInfo.jsx";
import React from "react";
import { Link } from "react-router-dom";
import { recipes } from "../data.jsx";

const Banner = () => {
  return (
    <>
      {recipes.map((item, key) => {
        if (item.recipe_isBanner === true) {
          return (
            <section className=" bg-white" key={key}>
              <div className="flex items-center md:min-h-[60vh] ml-[calc((100vw-1200px)/2)]">
                <div className="w-1/2">
                  <MetaInfo data={{ item }} />

                  <h1 className="max-w-[440px]">{item.recipe_title}</h1>
                  <p className="max-w-[440px]">{item.recipe_description}</p>

                  <MetaAuthor data={{ item }} />

                  <Link
                    to={`/recipe/${item.recipe_slug}`}
                    className="btn btn-accent inline-block mt-5"
                  >
                    View Recipe
                  </Link>
                </div>
                <img
                  src={`${devBaseImgUrl}/${item.recipe_thumbnail}`}
                  alt=""
                  className="h-[600px] w-1/2 object-cover"
                />
              </div>
            </section>
          );
        }
      })}
    </>
  );
};

export default Banner;
