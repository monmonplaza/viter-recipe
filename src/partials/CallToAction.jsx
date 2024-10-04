import { devBaseImgUrl } from "@/helper/functions-general.jsx";
import React from "react";

const CallToAction = () => {
  return (
    <section
      className={`mt-24 bg-[url('./public/img/bg-single.webp')] bg-cover bg-center bg-no-repeat min-h-[400px] flex items-center justify-center border-y border-1 border-gray-200 `}
    >
      <div className="text-center max-w-[700px]">
        <h2>Easy Meal Forum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tenetur
          vero laudantium quidem consectetur quasi recusandae sit, ex itaque
          autem sint praesentium minus unde eaque delectus rem. Laboriosam
          dolorem sapiente repudiandae doloremque,
        </p>
        <a
          href="#"
          className="p-2 bg-dark text-light font-bold rounded-full px-4 hover:opacity-90 transition-all"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
