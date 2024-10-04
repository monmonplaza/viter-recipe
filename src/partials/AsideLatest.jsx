import { devBaseImgUrl } from "@/helper/functions-general.jsx";
import { recipes } from "@/website/data.jsx";
import { Calendar } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const AsideLatest = () => {
  const allRecent = recipes.filter((item) => {
    return (
      Math.floor(
        Math.abs(new Date(item.published) - new Date()) / (1000 * 60 * 60 * 24)
      ) < 7
    );
  });

  return (
    <>
      <div className="aside-box mb-10">
        <h4>Latest Recipe</h4>

        {allRecent.slice(0, 4).map((item, key) => {
          return (
            <div className="card flex items-center gap-5 mb-5" key={key}>
              <img
                src={`${devBaseImgUrl}/${item.thumbnail}`}
                alt=""
                className="w-[140px] h-[120px] object-cover"
              />
              <div>
                <small className="flex gap-2 items-center text-body text-xs mb-2">
                  <Calendar className="" size={13} /> {item.published}
                </small>
                <Link
                  to={`/recipe/${item.slug}`}
                  className="text-sm font-bold leading-tight"
                >
                  {item.title}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AsideLatest;
