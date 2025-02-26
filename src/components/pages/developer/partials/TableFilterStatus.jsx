import React from "react";

const TableFilterStatus = ({ setFilterValue, setIsFilter, filterValue }) => {
  return (
    <>
      {" "}
      <div className="table-filter-status px-2 bg-yellow-100 bg-opacity-30">
        <ul className="flex gap-3 ">
          <li
            className={`text-xs p-3 px-5 font-poppinsBold ${
              filterValue === "" ? "border-b-2 border-accent" : ""
            } `}
          >
            <button
              className=" active:opacity-100 text-accent"
              onClick={() => {
                setFilterValue("");
                setIsFilter(false);
              }}
            >
              All
            </button>
          </li>
          <li
            className={`text-xs p-3 px-5 font-poppinsBold ${
              filterValue === 1 ? "border-b-2 border-accent" : ""
            } `}
          >
            <button
              className="opacity-50 text-dark"
              onClick={() => {
                setFilterValue(1);
                setIsFilter(true);
              }}
            >
              Active
            </button>
          </li>
          <li
            className={`text-xs p-3 px-5 font-poppinsBold ${
              filterValue === 0 ? "border-b-2 border-accent" : ""
            } `}
          >
            <button
              className="opacity-50 text-dark"
              onClick={() => {
                setFilterValue(0);
                setIsFilter(true);
              }}
            >
              Inactive
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TableFilterStatus;
