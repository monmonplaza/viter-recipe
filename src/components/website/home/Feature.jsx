import { devBaseImgUrl } from "@/components/helpers/functions-general.jsx";
import MetaAuthor from "@/components/website/partials/MetaAuthor.jsx";
import MetaInfo from "@/components/website/partials/MetaInfo.jsx";
import React from "react";
import { Link } from "react-router-dom";
import { recipes } from "../data.jsx";

const Feature = () => {
  return (
    <>
      <section className="bg-white py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-10">
            {recipes
              .filter((item) => item.recipe_isFeature === true)
              .slice(0, 3)
              .map((item, key) => {
                return (
                  <div className="card" key={key}>
                    <img
                      src={`${devBaseImgUrl}/${item.recipe_thumbnail}`}
                      alt=""
                      className="w-full h-[330px] object-cover"
                    />

                    <div className="py-5">
                      <MetaInfo data={{ item }} />
                      <Link to={`/recipe/${item.recipe_slug}`}>
                        <h3>{item.recipe_title}</h3>
                      </Link>
                      <p className="line-clamp-4">{item.recipe_description}</p>
                      <MetaAuthor data={{ item }} />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
