import { devBaseImgUrl } from "@/helper/functions-general.jsx";
import MetaAuthor from "@/partials/MetaAuthor";
import MetaInfo from "@/partials/MetaInfo";
import React from "react";

const Feature = () => {
  return (
    <>
      <section className="bg-white py-20">
        <div className="container">
          <div className="grid grid-cols-3 gap-10">
            <div className="card">
              <img
                src={`${devBaseImgUrl}/pasta-1.jpg`}
                alt=""
                className="w-full"
              />

              <div className="py-5">
                <MetaInfo tags="super easy" time="30mins" />
                <h3>Cheesy pasta with crispy bacon and mozzarella cheese</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, ut quia? Accusantium eius minus perferendis odio!
                  Rerum vitae quas nostrum quisquam explicabo aliquid? Sed,
                  illum?
                </p>
                <MetaAuthor
                  image="https://via.placeholder.com/40x40"
                  date="May 23, 2003"
                  author="Maggy Dawson"
                />
              </div>
            </div>

            <div className="card">
              <img
                src={`${devBaseImgUrl}/pasta-1.jpg`}
                alt=""
                className="w-full"
              />

              <div className="py-5">
                <MetaInfo tags="super easy" time="30mins" />
                <h3>Cheesy pasta with crispy bacon and mozzarella cheese</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, ut quia? Accusantium eius minus perferendis odio!
                  Rerum vitae quas nostrum quisquam explicabo aliquid? Sed,
                  illum?
                </p>
                <MetaAuthor
                  image="https://via.placeholder.com/40x40"
                  date="May 23, 2003"
                  author="Maggy Dawson"
                />
              </div>
            </div>

            <div className="card">
              <img
                src={`${devBaseImgUrl}/pasta-1.jpg`}
                alt=""
                className="w-full"
              />

              <div className="py-5">
                <MetaInfo tags="super easy" time="30mins" />
                <h3>Cheesy pasta with crispy bacon and mozzarella cheese</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, ut quia? Accusantium eius minus perferendis odio!
                  Rerum vitae quas nostrum quisquam explicabo aliquid? Sed,
                  illum?
                </p>
                <MetaAuthor
                  image="https://via.placeholder.com/40x40"
                  date="May 23, 2003"
                  author="Maggy Dawson"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
