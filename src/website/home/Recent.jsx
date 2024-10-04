import { devBaseImgUrl, devBaseUrl } from "@/helper/functions-general.jsx";
import AsideAuthor from "@/partials/AsideAuthor.jsx";
import AsideCategory from "@/partials/AsideCategory.jsx";
import AsideLatest from "@/partials/AsideLatest.jsx";
import AsideNewsletter from "@/partials/AsideNewsletter.jsx";
import AsideSocialMedia from "@/partials/AsideSocialMedia.jsx";
import MetaInfo from "@/partials/MetaInfo";
import React from "react";
import { Link } from "react-router-dom";
import { recipes } from "../data.jsx";

const Recent = () => {
  const allRecent = recipes.filter((item) => {
    return (
      Math.floor(
        Math.abs(new Date(item.published) - new Date()) / (1000 * 60 * 60 * 24)
      ) < 10 &&
      item.isFeature === false &&
      item.isBanner === false
    );
  });
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-[3.5fr_1.5fr] gap-10">
          <div>
            <h3>Recent Recipes</h3>
            {allRecent.slice(0, 4).map((item, key) => {
              return (
                <div className="card md:flex items-center mb-2" key={key}>
                  <figure>
                    <img
                      src={`${devBaseImgUrl}/${item.thumbnail}`}
                      alt=""
                      className="w-[280px] h-[220px] object-cover"
                    />
                  </figure>
                  <article className="py-4 md:p-10 basis-[calc(100%-280px)]">
                    <MetaInfo data={{ item }} />
                    <Link to={`/recipe/${item.slug}`}>
                      <h3>{item.title}</h3>
                    </Link>
                    <p className="mb-0">{item.description}</p>
                  </article>
                </div>
              );
            })}
          </div>
          <aside>
            <AsideNewsletter />
            <AsideSocialMedia />
            <AsideCategory />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Recent;
