import { X } from "lucide-react";
import React from "react";
import ModalWrapper from "../partials/modal/ModalWrapper.jsx";

const ModalAddRecipe = () => {
  return (
    <>
      <ModalWrapper>
        <div className="modal-main bg-white max-w-[1200px] w-full z-50 min-h-[80vh] rounded-md shadow-sm border border-gray-300">
          <div className="modal-header px-4 py-2 border-b border-gray-300 flex justify-between items-center">
            Edit Recipe
            <button>
              <X />
            </button>
          </div>
          <div className="modal-body px-4 py-2">
            <div className="form">
              <div className="grid grid-cols-[1fr_300px]">
                <div className="p-1">
                  <div className="input-wrap">
                    <label htmlFor="">Title</label>
                    <input type="text" />
                  </div>

                  <div className="input-wrap">
                    <label htmlFor="">Instruction</label>
                    <textarea className="xl"></textarea>
                  </div>
                </div>
                <div>
                  <div className="input-wrap"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddRecipe;
