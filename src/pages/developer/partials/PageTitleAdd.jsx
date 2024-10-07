import { Plus } from "lucide-react";
import React from "react";

const PageTitleAdd = ({ title = "" }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-poppinsBold mb-0">{title}</h3>
        <button className="btn text-xs gap-1">
          <Plus size={14} /> Add New
        </button>
      </div>
    </div>
  );
};

export default PageTitleAdd;
