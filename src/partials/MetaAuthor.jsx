import React from "react";

const MetaAuthor = ({ date, image, author }) => {
  return (
    <>
      <div className="flex items-center gap-2 ">
        <img src={`${image}`} alt="" className="rounded-full" />
        <div className="">
          <p className="mb-1.5 text-dark uppercase font-bold text-xs leading-none">
            {author}
          </p>

          <p className="mb-0 leading-none text-[12px]">{date}</p>
        </div>
      </div>
    </>
  );
};

export default MetaAuthor;
