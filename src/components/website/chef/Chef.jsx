import { devBaseImgUrl } from "@/components/helpers/functions-general.jsx";
import AsideLatest from "@/components/website/partials/AsideLatest.jsx";
import AsideNewsletter from "@/components/website/partials/AsideNewsletter.jsx";
import AsideSocialMedia from "@/components/website/partials/AsideSocialMedia.jsx";
import CallToAction from "@/components/website/partials/CallToAction.jsx";
import Footer from "@/components/website/partials/Footer.jsx";
import Header from "@/components/website/partials/Header.jsx";
import React from "react";
import Markdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import { chefs, recipes } from "../data.jsx";

const Chef = () => {
  const { slug } = useParams();

  const getChefInfo = chefs.filter((item) => {
    return item.chef_slug === slug;
  });

  const getChefRecipes = recipes.filter((item) => {
    return item.recipe_author_name === getChefInfo[0].chef_name;
  });

  return (
    <>
      <Header />
      <section>
        <div className="category_banner bg-dark text-light py-5 text-center">
          <h1 className="mb-0 capitalize">{slug}</h1>
        </div>
        <div className="container">
          <div className="grid grid-cols-[3.5fr_1.5fr] gap-10 pt-10">
            <main>
              {getChefInfo.map((chef, key) => {
                return (
                  <React.Fragment key={key}>
                    <img
                      src={`${devBaseImgUrl}/${chef.chef_image}`}
                      alt=""
                      className="w-full h-[400px] object-cover"
                    />

                    <h3 className="pb-3 my-5 border-b border-gray-300 ">
                      Information
                    </h3>
                    <Markdown>{chef.chef_fullbio}</Markdown>
                  </React.Fragment>
                );
              })}

              <h3 className="pb-3 my-5 border-b border-gray-300 ">
                Recipe by {getChefInfo[0].chef_name}
              </h3>

              <div className="grid grid-cols-3 gap-5">
                {getChefRecipes.slice(0, 3).map((recipe, key) => {
                  return (
                    <Link to={`/recipe/${recipe.recipe_slug}`} key={key}>
                      <div className="card">
                        <img
                          src={`${devBaseImgUrl}/${recipe.recipe_thumbnail}`}
                          alt=""
                          className="mb-3 w-full h-[170px] object-cover"
                        />
                        <h4 className="mb-2 ">{recipe.recipe_title}</h4>
                        <p className="line-clamp-3 mb-3">
                          {recipe.recipe_description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </main>
            <aside>
              <AsideLatest />
              <AsideNewsletter />
              <AsideSocialMedia />
            </aside>
          </div>
        </div>
      </section>
      <CallToAction />
      <Footer />
    </>
  );
};

export default Chef;
