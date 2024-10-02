import { devBaseImgUrl } from "@/helper/functions-general.jsx";
import AsideAuthor from "@/partials/AsideAuthor.jsx";
import AsideLatest from "@/partials/AsideLatest.jsx";
import AsideNewsletter from "@/partials/AsideNewsletter.jsx";
import AsideSocialMedia from "@/partials/AsideSocialMedia.jsx";
import MetaInfo from "@/partials/MetaInfo";
import { Calendar, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Recent = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-[3.5fr_1.5fr] gap-10">
          <div>
            <h3>Recent Recipes</h3>

            <div className="card flex items-center mb-10">
              <figure className="basis-3/4">
                <img
                  src={`${devBaseImgUrl}/pasta-1.jpg`}
                  alt=""
                  className="w-[400px] h-[250px] object-cover"
                />
              </figure>
              <article className="p-10">
                <MetaInfo tags="Healthy" time="10mins" />
                <h3>Serving safe food it's not an option it's an obligation</h3>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur distinctio ea voluptate ratione cumque deleniti
                  quo nesciunt, accusamus perferendis eum.
                </p>
              </article>
            </div>

            <div className="card flex items-center mb-10">
              <figure className="basis-3/4">
                <img
                  src={`${devBaseImgUrl}/pasta-1.jpg`}
                  alt=""
                  className="w-[400px] h-[250px] object-cover"
                />
              </figure>
              <article className="p-10">
                <MetaInfo tags="Healthy" time="10mins" />
                <h3>Serving safe food it's not an option it's an obligation</h3>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur distinctio ea voluptate ratione cumque deleniti
                  quo nesciunt, accusamus perferendis eum.
                </p>
              </article>
            </div>

            <div className="card flex items-center mb-10">
              <figure className="basis-3/4">
                <img
                  src={`${devBaseImgUrl}/pasta-1.jpg`}
                  alt=""
                  className="w-[400px] h-[250px] object-cover"
                />
              </figure>
              <article className="p-10">
                <MetaInfo tags="Healthy" time="10mins" />
                <h3>Serving safe food it's not an option it's an obligation</h3>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur distinctio ea voluptate ratione cumque deleniti
                  quo nesciunt, accusamus perferendis eum.
                </p>
              </article>
            </div>
          </div>
          <aside>
            <AsideAuthor />
            <AsideNewsletter />
            <AsideLatest />
            <AsideSocialMedia />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Recent;
