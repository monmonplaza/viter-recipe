import { Search } from "lucide-react";
import React from "react";

const TableSearch = () => {
  return (
    <>
      <div className="p-4 flex justify-between items-center">
        <h4 className="mb-0 font-poppinsBold">All Recipe - 20 </h4>

        <form action="" className="relative w-[300px]">
          <div className="input-wrap">
            <Search className="absolute top-2 left-1.5 opacity-40" size={18} />
            <input type="text" className="!pl-8 " placeholder="Type keyword" />
          </div>
        </form>
      </div>
    </>
  );
};

export default TableSearch;
