import { devBaseImgUrl } from "@/helper/functions-general.jsx";
import React from "react";
import { Link } from "react-router-dom";

const AsideAuthor = ({ data }) => {
  return (
    <div className="text-center mb-5">
      <img
        src={`${devBaseImgUrl}/${data.author_image}`}
        alt=""
        className="rounded-full mb-5 mx-auto size-24"
      />

      <h4>Hi! I'm {data.author_name}</h4>
      <Link to={`/chef/${data.author_name.toLowerCase().replace(/\s+/g, "-")}`}>
        View Profile
      </Link>
    </div>
  );
};

export default AsideAuthor;
