import React from "react";

const Pill = ({ isActive }) => {
  return (
    <div
      className={`inline-block text-[10px] text-center rounded-full px-3 py-0.5  capitalize  ${
        isActive ? "bg-success text-white" : "bg-gray-200 text-gray-500"
      }`}
    >
      <span>{isActive ? "Active" : "Inactive"} </span>
    </div>
  );
};

export default Pill;
