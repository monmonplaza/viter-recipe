import React from "react";
import { videos } from "../data.jsx";

const Video = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container">
        <div className="text-center">
          <h2>New Recipes Every Wednesday</h2>
          <p className="max-w-[600px] w-full mx-auto text-balance">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            dolores odio voluptates quam consequatur. Ducimus cum voluptate modi
            vero officia!
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {videos.slice(0, 2).map((item, key) => {
              return (
                <iframe
                  key={key}
                  width="100%"
                  height="315"
                  src={item.url}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="aspect-video"
                ></iframe>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
