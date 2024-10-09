import { devBaseImgUrl } from "@/components/helpers/functions-general.jsx";
import React from "react";
import { Link } from "react-router-dom";

const MetaAuthor = ({ data = {} }) => {
  const slug = data?.item.recipe_author_name.toLowerCase().replace(/\s+/g, "-");

  console.log(data);
  return (
    <>
      <div className="flex items-center gap-2 ">
        <img
          src={`${devBaseImgUrl}/${data?.item.recipe_author_image}`}
          alt=""
          className="rounded-full w-[50px] h-[50px]"
        />
        <div className="">
          <Link
            to={`/chef/${slug}`}
            className="mb-2 text-dark uppercase font-bold text-xs leading-none inline-block"
          >
            {data?.item.recipe_author_name}
          </Link>

          <p className="mb-0 leading-none text-[12px]">
            {data?.item.recipe_published}
          </p>
        </div>
      </div>
    </>
  );
};

export default MetaAuthor;
