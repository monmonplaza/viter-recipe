import { X } from "lucide-react";
import React from "react";
import ModalWrapper from "../partials/modal/ModalWrapper.jsx";

const ModalAddRecipeCategory = () => {
  return (
    <>
      <ModalWrapper>
        <div className="modal-main bg-white max-w-[300px] w-full z-50 min-h-[99dvh] rounded-md shadow-sm border border-gray-300 absolute right-1 top-1 grid grid-rows-[auto_1fr_auto]">
          <div className="modal-header p-2 border-b border-gray-300 flex justify-between items-center">
            Edit Recipe
            <button>
              <X size={16} />
            </button>
          </div>

          <div className="modal-body p-2">
            <div className="input-wrap">
              <label htmlFor="">Title</label>
              <input type="text" />
            </div>
          </div>

          <div className="modal-action ">
            <button className="btn btn-save">Save</button>
            <button className="btn btn-cancel">Cancel</button>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddRecipeCategory;
