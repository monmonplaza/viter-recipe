import { devBaseImgUrl } from "@/helper/functions-general.jsx";
import AsideCategory from "@/website/partials/AsideCategory.jsx";
import AsideLatest from "@/website/partials/AsideLatest.jsx";
import AsideNewsletter from "@/website/partials/AsideNewsletter.jsx";
import AsideSocialMedia from "@/website/partials/AsideSocialMedia.jsx";
import Footer from "@/website/partials/Footer.jsx";
import Header from "@/website/partials/Header.jsx";
import { Clock, Grid2X2, Tag } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { recipes } from "../data.jsx";

const Category = () => {
  const { slug } = useParams();

  const getRecipeByCategory = recipes.filter((item) => {
    return item.recipe_category === slug;
  });

  return (
    <>
      <Header />
      <section>
        <div className="category_banner bg-dark text-light py-5 text-center">
          <h1 className="mb-0 capitalize">All {slug} Recipe</h1>
        </div>
        <div className="container">
          <div className="grid grid-cols-[3.5fr_1.5fr] gap-10 pt-10">
            <main>
              {getRecipeByCategory.map((item, key) => {
                return (
                  <div
                    className="card-category pb-10 border-b border-gray-200 mb-5"
                    key={key}
                  >
                    <img
                      src={`${devBaseImgUrl}/${item.recipe_thumbnail}`}
                      alt=""
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="flex gap-6 items-center mt-5 mb-3">
                      <small className="flex gap-2 items-center text-body text-xs">
                        <Clock size={13} /> {item.recipe_time}
                      </small>
                      <small className="flex gap-2 items-center text-body text-xs uppercase">
                        <Tag size={13} /> {item.recipe_tag}
                      </small>

                      <small className="flex gap-2 items-center text-body text-xs uppercase">
                        <Grid2X2 size={13} /> {item.recipe_category}
                      </small>
                    </div>

                    <Link to={`/recipe/${item.recipe_slug}`}>
                      <h2>{item.recipe_title}</h2>
                    </Link>
                    <p>{item.recipe_description}</p>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 ">
                        <img
                          src={`${devBaseImgUrl}/${item.recipe_author_image}`}
                          alt=""
                          className="rounded-full w-[50px] h-[50px]"
                        />
                        <div className="">
                          <p className="mb-0 text-dark uppercase font-bold text-xs leading-none">
                            {item.recipe_author_name}
                          </p>
                          <small className="opacity-50">
                            {item.recipe_published}
                          </small>
                        </div>
                      </div>
                      <Link
                        to={`/recipe/${item.recipe_slug}`}
                        className="p-2 bg-accent text-dark font-bold rounded-full px-4 hover:opacity-90 transition-all"
                      >
                        Get The Recipe
                      </Link>
                    </div>
                  </div>
                );
              })}
            </main>
            <aside>
              <AsideCategory />
              <AsideNewsletter />
              <AsideLatest />
              <AsideSocialMedia />
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Category;
