import { devBaseImgUrl } from "@/helper/functions-general.jsx";
import { Calendar } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const AsideLatest = () => {
  return (
    <>
      <div className="aside-box mb-10">
        <h4>Lastest Posts</h4>
        <div className="card flex items-center gap-5 mb-5">
          <img
            src={`${devBaseImgUrl}/pasta-1.jpg`}
            alt=""
            className="w-[120px] object-cover"
          />
          <div>
            <small className="flex gap-2 items-center text-body text-xs mb-2">
              <Calendar className="" size={13} /> May 23, 2003
            </small>
            <Link to="/" className="text-base font-bold leading-tight">
              Life is a combination of magic and pasta
            </Link>
          </div>
        </div>

        <div className="card flex items-center gap-5 mb-5">
          <img
            src={`${devBaseImgUrl}/pasta-1.jpg`}
            alt=""
            className="w-[120px] object-cover"
          />
          <div>
            <small className="flex gap-2 items-center text-body text-xs mb-2">
              <Calendar className="" size={13} /> May 23, 2003
            </small>
            <Link to="/" className="text-base font-bold leading-tight">
              Life is a combination of magic and pasta
            </Link>
          </div>
        </div>

        <div className="card flex items-center gap-5 mb-5">
          <img
            src={`${devBaseImgUrl}/pasta-1.jpg`}
            alt=""
            className="w-[120px] object-cover"
          />
          <div>
            <small className="flex gap-2 items-center text-body text-xs mb-2">
              <Calendar className="" size={13} /> May 23, 2003
            </small>
            <Link to="/" className="text-base font-bold leading-tight">
              Life is a combination of magic and pasta
            </Link>
          </div>
        </div>

        <div className="card flex items-center gap-5 mb-5">
          <img
            src={`${devBaseImgUrl}/pasta-1.jpg`}
            alt=""
            className="w-[120px] object-cover"
          />
          <div>
            <small className="flex gap-2 items-center text-body text-xs mb-2">
              <Calendar className="" size={13} /> May 23, 2003
            </small>
            <Link to="/" className="text-base font-bold leading-tight">
              Life is a combination of magic and pasta
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AsideLatest;
