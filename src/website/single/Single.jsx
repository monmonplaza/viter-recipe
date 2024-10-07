import { devBaseImgUrl } from "@/helper/functions-general.jsx";
import AsideAuthor from "@/website/partials/AsideAuthor.jsx";
import AsideLatest from "@/website/partials/AsideLatest.jsx";
import AsideNewsletter from "@/website/partials/AsideNewsletter.jsx";
import Footer from "@/website/partials/Footer.jsx";
import Header from "@/website/partials/Header.jsx";
import { Clock, Grid2X2, Tag } from "lucide-react";
import React from "react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import { recipes } from "../data.jsx";

const Single = () => {
  const { slug } = useParams();

  const getRecipe = () => {
    return recipes.filter((item) => item.recipe_slug === slug)[0];
  };

  const [updateServing, setUpdatedServing] = React.useState(
    getRecipe().recipe_serving
  );

  const handleComputePerServing = (e) => {
    setUpdatedServing(e.target.value);
  };

  return (
    <>
      <Header />
      <div className="banner bg-[url('../public/img/bg-single.webp')] bg-cover">
        <div className="container">
          <div className="md:grid grid-cols-2 items-center min-h-[70vh]  gap-10 py-14">
            <div className="max-w-[500px]">
              <div className="flex gap-6 items-center mb-3">
                <small className="flex gap-2 items-center text-body text-xs">
                  <Clock size={13} /> {getRecipe().recipe_time}
                </small>
                <small className="flex gap-2 items-center text-body text-xs uppercase">
                  <Tag size={13} /> {getRecipe().recipe_tag}
                </small>
                {getRecipe().recipe_category !== "" && (
                  <small className="flex gap-2 items-center text-body text-xs uppercase">
                    <Grid2X2 size={13} />
                    {getRecipe().recipe_category}
                  </small>
                )}
              </div>

              <h1>{getRecipe().recipe_title}</h1>
              <p>{getRecipe().recipe_description}</p>
            </div>

            <figure className="shadow-md">
              <img
                src={`${devBaseImgUrl}/${getRecipe().recipe_thumbnail}`}
                alt=""
                className="w-full h-[500px] object-cover"
              />
            </figure>
          </div>
        </div>
      </div>

      <section className="bg-white py-20">
        <div className="container">
          <div className="md:grid grid-cols-[3.5fr_1.5fr] gap-10">
            <article>
              <div className="mb-14">
                <div className="flex justify-between items-center border-b border-gray-100 mb-5">
                  <h3 className="pb-3 mb-0">Ingredients</h3>
                  <label htmlFor="" className="flex gap-2 items-center ">
                    <input
                      type="text"
                      className="border border-gray-1 w-[30px] h-[30px] p-1 text-center !font-poppinsRegular"
                      onChange={(e) => handleComputePerServing(e)}
                      value={updateServing}
                    />
                    <span className="font-bold">Serving</span>
                  </label>
                </div>

                <ul className="space-y-2.5 ">
                  {getRecipe().recipe_ingredients.map((item, key) => {
                    return (
                      <li key={key} className="grid grid-cols-[50px_70px_1fr]">
                        <span className="pr-0.5">
                          {item.measurement
                            ? Math.round(
                                ((Number(item.measurement) /
                                  Number(getRecipe().recipe_serving)) *
                                  updateServing +
                                  Number.EPSILON) *
                                  100
                              ) / 100
                            : ""}
                        </span>

                        <span className="pr-1.5">{item.unit}</span>
                        {item.title}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <div className="border-b border-gray-100 mb-5">
                  <h3>Direction</h3>
                </div>
                <Markdown>{getRecipe().recipe_instruction}</Markdown>
              </div>

              <div className="nutritional-facts my-10">
                <div>
                  <h4>Nutritional Facts Per Serving</h4>
                  <ul className="grid grid-cols-2 gap-1 md:gap-0 md:grid-cols-5 bg-accent justify-center divide-white md:divide-x-2 ">
                    <li className=" font-poppinsBold text-xs  p-2 justify-self-center text-center w-full ">
                      Fats
                      <span className="block  font-poppinsRegular">
                        {getRecipe().recipe_fats}
                      </span>
                    </li>
                    <li className=" font-poppinsBold text-xs  p-2 justify-self-center text-center w-full ">
                      Sugars
                      <span className="block  font-poppinsRegular">
                        {getRecipe().recipe_sugar}
                      </span>
                    </li>
                    <li className=" font-poppinsBold text-xs  p-2 justify-self-center text-center w-full ">
                      Sodium
                      <span className="block  font-poppinsRegular">
                        {getRecipe().recipe_sodium}
                      </span>
                    </li>
                    <li className=" font-poppinsBold text-xs  p-2 justify-self-center text-center w-full ">
                      Carbohydrates
                      <span className="block  font-poppinsRegular">
                        {getRecipe().recipe_carbohydrates}
                      </span>
                    </li>
                    <li className=" font-poppinsBold text-xs  p-2 justify-self-center text-center w-full ">
                      Cholesterol
                      <span className="block  font-poppinsRegular">
                        {getRecipe().recipe_cholesterol}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <aside>
              <AsideAuthor data={getRecipe()} />
              <AsideNewsletter />
              <AsideLatest />
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Single;
