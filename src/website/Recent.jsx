import MetaInfo from "@/partials/MetaInfo";
import React from "react";

const Recent = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-[3.5fr_1fr] gap-10">
          <div>
            <h3>Recent Recipes</h3>

            <div className="card flex items-center mb-10">
              <figure className="basis-3/4">
                <img
                  src="https://via.placeholder.com/350x200"
                  alt=""
                  className="w-[400px] h-[300px] object-cover"
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
                  src="https://via.placeholder.com/350x200"
                  alt=""
                  className="w-[400px] h-[300px] object-cover"
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
                  src="https://via.placeholder.com/350x200"
                  alt=""
                  className="w-[400px] h-[300px] object-cover"
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
          <aside></aside>
        </div>
      </div>
    </section>
  );
};

export default Recent;
