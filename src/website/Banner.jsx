import MetaAuthor from "@/partials/MetaAuthor";
import MetaInfo from "@/partials/MetaInfo";
import React from "react";

const Banner = () => {
  return (
    <>
      <section className=" relative">
        <div className="container ">
          <div className="flex items-center min-h-[70vh]  ">
            <div className="basis-1/2">
              <MetaInfo tags="Tips & Tricks" time="20mins" />

              <h1>Green Veggies with Flavoured Butter</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
                eligendi vitae deserunt sunt quae possimus quibusdam laudantium
                modi. Explicabo minus perferendis quos quisquam temporibus ea
                sequi praesentium dignissimos, aperiam exercitationem?
              </p>

              <MetaAuthor
                image="https://via.placeholder.com/40x40"
                date="May 23, 2003"
                author="Maggy Dawson"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
