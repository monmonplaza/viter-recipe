import { devBaseImgUrl, devBaseUrl } from "@/helper/functions-general.jsx";
import AsideAuthor from "@/website/partials/AsideAuthor.jsx";
import AsideCategory from "@/website/partials/AsideCategory.jsx";
import AsideLatest from "@/website/partials/AsideLatest.jsx";
import AsideNewsletter from "@/website/partials/AsideNewsletter.jsx";
import AsideSocialMedia from "@/website/partials/AsideSocialMedia.jsx";
import MetaInfo from "@/website/partials/MetaInfo.jsx";
import React from "react";
import { Link } from "react-router-dom";
import { recipes } from "../data.jsx";

const Recent = () => {
  const allRecent = recipes.filter((item) => {
    return (
      Math.floor(
        Math.abs(new Date(item.recipe_published) - new Date()) /
          (1000 * 60 * 60 * 24)
      ) < 10 &&
      item.recipe_isFeature === false &&
      item.recipe_isBanner === false
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
                      src={`${devBaseImgUrl}/${item.recipe_thumbnail}`}
                      alt=""
                      className="w-[280px] h-[220px] object-cover"
                    />
                  </figure>
                  <article className="py-4 md:p-10 basis-[calc(100%-280px)]">
                    <MetaInfo data={{ item }} />
                    <Link to={`/recipe/${item.recipe_slug}`}>
                      <h3>{item.recipe_title}</h3>
                    </Link>
                    <p className="mb-0">{item.recipe_description}</p>
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
