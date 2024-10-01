import React from "react";
import { Clock, Tag } from "lucide-react";

const MetaInfo = ({ time, tags }) => {
  return (
    <>
      <div className="flex gap-6 items-center mb-3">
        <small className="flex gap-2 items-center text-body text-xs">
          <Clock className="" size={13} /> {time}
        </small>
        <small className="flex gap-2 items-center text-body text-xs uppercase">
          <Tag className="" size={13} /> {tags}
        </small>
      </div>
    </>
  );
};

export default MetaInfo;
