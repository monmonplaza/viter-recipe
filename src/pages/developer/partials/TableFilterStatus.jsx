import React from "react";

const TableFilterStatus = () => {
  return (
    <>
      {" "}
      <div className="table-filter-status px-2 bg-yellow-100 bg-opacity-30">
        <ul className="flex gap-3 ">
          <li className="text-xs p-3 px-5 font-poppinsBold border-b-2 border-accent">
            <button className=" active:opacity-100 text-accent">All</button>
          </li>
          <li className="text-xs p-3 px-5 font-poppinsBold">
            <button className="opacity-50 text-dark">Active</button>
          </li>
          <li className="text-xs p-3 px-5 font-poppinsBold">
            <button className="opacity-50 text-dark">Inactive</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TableFilterStatus;
