import React from "react";

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
          <div className="grid grid-cols-2 gap-5">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/jNAxSWczEj8?si=IxmKVmHoT6gAc7Sf"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="aspect-video"
            ></iframe>

            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/jNAxSWczEj8?si=IxmKVmHoT6gAc7Sf"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="aspect-video"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
