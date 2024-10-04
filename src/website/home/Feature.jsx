import { devBaseImgUrl } from "@/helper/functions-general.jsx";
import MetaAuthor from "@/partials/MetaAuthor";
import MetaInfo from "@/partials/MetaInfo";
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
              .filter((item) => item.isFeature === true)
              .slice(0, 3)
              .map((item, key) => {
                return (
                  <div className="card" key={key}>
                    <img
                      src={`${devBaseImgUrl}/${item.thumbnail}`}
                      alt=""
                      className="w-full h-[330px] object-cover"
                    />

                    <div className="py-5">
                      <MetaInfo data={{ item }} />
                      <Link to={`/recipe/${item.slug}`}>
                        <h3>{item.title}</h3>
                      </Link>
                      <p className="line-clamp-4">{item.description}</p>
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
