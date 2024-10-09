import { devBaseImgUrl } from "@/components/helpers/functions-general.jsx";
import React from "react";
import { Link } from "react-router-dom";

const AsideAuthor = ({ data }) => {
  return (
    <div className="text-center mb-5">
      <img
        src={`${devBaseImgUrl}/${data.recipe_author_image}`}
        alt=""
        className="rounded-full mb-5 mx-auto size-24"
      />

      <h4>Hi! I'm {data.recipe_author_name}</h4>
      <Link
        to={`/chef/${data.recipe_author_name
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
      >
        View Profile
      </Link>
    </div>
  );
};

export default AsideAuthor;
