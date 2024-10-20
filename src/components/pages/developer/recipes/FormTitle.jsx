import React from "react";

const FormTitle = () => {
  return (
    <>
      <div className=" p-4">
        <div className="flex justify-end items-center gap-5 ">
          <div className="flex gap-5">
            <div className="flex gap-1">
              <input type="checkbox" />
              Feature
            </div>

            <div className="flex gap-1">
              <input type="checkbox" />
              Banner
            </div>
          </div>
        </div>

        <div className="input-wrap">
          <label htmlFor="">Title</label>
          <input type="text" />
        </div>

        <div className="grid grid-cols-[1fr_300px] gap-5">
          <div className="input-wrap">
            <label htmlFor="">Description</label>
            <textarea className="!h-[200px] overflow-y-auto" />
          </div>
          <div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default FormTitle;
