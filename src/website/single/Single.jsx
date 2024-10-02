import { devBaseImgUrl } from "@/helper/functions-general.jsx";
import AsideAuthor from "@/partials/AsideAuthor.jsx";
import AsideLatest from "@/partials/AsideLatest.jsx";
import AsideNewsletter from "@/partials/AsideNewsletter.jsx";
import Footer from "@/partials/Footer.jsx";
import Header from "@/partials/Header.jsx";
import MetaAuthor from "@/partials/MetaAuthor.jsx";
import MetaInfo from "@/partials/MetaInfo.jsx";
import React from "react";

const Single = () => {
  return (
    <>
      <Header />
      <div className="banner">
        <div className="container">
          <div className="grid grid-cols-2 items-center min-h-[70vh]  gap-10 ">
            <div className="basis-1/2">
              <MetaInfo tags="Tips & Tricks" time="20mins" />

              <h1>Green Veggies with Flavoured Butter</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
                eligendi vitae deserunt sunt quae possimus quibusdam laudantium
                modi. Explicabo minus perferendis quos quisquam temporibus ea
                sequi praesentium dignissimos, aperiam exercitationem?
              </p>
            </div>

            <figure>
              <img
                src={`${devBaseImgUrl}/pasta-1.jpg`}
                alt=""
                className="w-full"
              />
            </figure>
          </div>
        </div>
      </div>

      <section className="bg-white py-20">
        <div className="container">
          <div className="grid grid-cols-[3.5fr_1.5fr] gap-10">
            <article>
              <div className="mb-14">
                <div className="flex justify-between items-center border-b border-gray-100 mb-5">
                  <h3 className="pb-3 mb-0">Ingredients</h3>
                  <label htmlFor="" className="flex gap-2 items-center ">
                    <input
                      type="text"
                      className="border border-gray-1 w-[30px] h-[30px] p-1 text-center !font-poppinsRegular"
                      value={3}
                    />
                    <span className="font-bold">Serving</span>
                  </label>
                </div>

                <ul className="grid grid-cols-2 gap-5">
                  <li>
                    <span>1</span>cup - soy sauce
                  </li>
                  <li>
                    <span>1</span>cup - soy sauce
                  </li>
                  <li>
                    <span>1</span>cup - soy sauce
                  </li>
                  <li>
                    <span>1</span>cup - soy sauce
                  </li>
                  <li>
                    <span>1</span>cup - soy sauce
                  </li>

                  <li>
                    <span>1</span>cup - soy sauce
                  </li>
                  <li>
                    <span>1</span>cup - soy sauce
                  </li>
                  <li>
                    <span>1</span>cup - soy sauce
                  </li>
                  <li>
                    <span>1</span>cup - soy sauce
                  </li>
                  <li>
                    <span>1</span>cup - soy sauce
                  </li>
                </ul>
              </div>
              <div>
                <div className="border-b border-gray-100 mb-5">
                  <h3>Direction</h3>
                </div>
                <h4>
                  01 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur, quas!
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium alias, laborum officia culpa voluptates aspernatur
                  dicta totam inventore ducimus quod.
                </p>

                <h4>
                  01 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur, quas!
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium alias, laborum officia culpa voluptates aspernatur
                  dicta totam inventore ducimus quod.
                </p>

                <h4>
                  01 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur, quas!
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium alias, laborum officia culpa voluptates aspernatur
                  dicta totam inventore ducimus quod.
                </p>

                <h4>
                  01 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur, quas!
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  voluptates esse amet odit laboriosam, veritatis neque adipisci
                  reiciendis, beatae totam, ducimus dolor mollitia optio nam
                  placeat ipsam? Fugiat porro voluptatem sed ipsam distinctio
                  modi at officia, quisquam unde ullam nostrum aperiam eaque sit
                  laudantium non recusandae eligendi esse vitae ad.
                </p>
              </div>

              <div className="nutritional-facts my-10">
                <div>
                  <h4>Nutritional Facts</h4>
                  <ul className="grid grid-cols-5 bg-accent justify-center divide-white divide-x-2">
                    <li className=" font-poppinsBold text-xs  p-2 justify-self-center text-center w-full ">
                      Fats
                      <span className="block  font-poppinsRegular">20g</span>
                    </li>
                    <li className=" font-poppinsBold text-xs  p-2 justify-self-center text-center w-full ">
                      Sugars
                      <span className="block  font-poppinsRegular">20g</span>
                    </li>
                    <li className=" font-poppinsBold text-xs  p-2 justify-self-center text-center w-full ">
                      Sodium
                      <span className="block  font-poppinsRegular">20g</span>
                    </li>
                    <li className=" font-poppinsBold text-xs  p-2 justify-self-center text-center w-full ">
                      Carbohydrates
                      <span className="block  font-poppinsRegular">20g</span>
                    </li>
                    <li className=" font-poppinsBold text-xs  p-2 justify-self-center text-center w-full ">
                      Cholesterol
                      <span className="block  font-poppinsRegular">20g</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <aside>
              <AsideAuthor />
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
