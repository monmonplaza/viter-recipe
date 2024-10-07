import { Clock, Grid2X2, Tag } from "lucide-react";
import React from "react";

const MetaInfo = ({ data = {} }) => {
  return (
    <>
      <div className="flex gap-6 items-center mb-3">
        <small className="flex gap-2 items-center text-body text-xs">
          <Clock size={13} /> {data?.item.recipe_time}
        </small>
        <small className="flex gap-2 items-center text-body text-xs uppercase">
          <Tag size={13} /> {data?.item.recipe_tag}
        </small>
        {data?.item.recipe_category !== "" && (
          <small className="flex gap-2 items-center text-body text-xs uppercase">
            <Grid2X2 size={13} />
            {data?.item.recipe_category}
          </small>
        )}
      </div>
    </>
  );
};

export default MetaInfo;
