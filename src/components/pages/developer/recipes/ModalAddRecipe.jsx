import { X } from "lucide-react";
import ModalWrapper from "../partials/modal/ModalWrapper.jsx";
import { default as FormFeatureImage } from "./FormFeatureImage.jsx";

const ModalAddRecipe = () => {
  return (
    <>
      <ModalWrapper>
        <div className="modal-main bg-white max-w-[800px] w-full z-50 min-h-[50dvh] rounded-md shadow-sm border border-gray-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  grid grid-rows-[auto_1fr_auto] py-2">
          <div className="modal-header px-4 py-2 border-b border-gray-300 flex justify-between items-center">
            Edit Recipe
            <button>
              <X />
            </button>
          </div>
          <div className="modal-body ">
            <div className="grid grid-rows-[auto_1fr_auto] h-full ">
              <div className="grid grid-cols-4 w-full justify-between mb-5 divide-x divide-gray-200 px-4 border-b border-gray-300 py-1">
                <button className="">
                  <div className="text-left">
                    <h5 className="font-poppinsBold text-xs">Step 1</h5>
                    <small>Title and Description </small>
                  </div>
                </button>
                <button className="pl-5">
                  <div className="text-left">
                    <h5 className="font-poppinsBold text-xs">Step 2</h5>
                    <small>Feature Image </small>
                  </div>
                </button>

                <button className="pl-5">
                  <div className="text-left">
                    <h5 className="font-poppinsBold text-xs">Step 3</h5>
                    <small>Unit & Measurements </small>
                  </div>
                </button>
                <button className="pl-5">
                  <div className="text-left">
                    <h5 className="font-poppinsBold text-xs">Step 4</h5>
                    <small>Directions </small>
                  </div>
                </button>
              </div>
              {/* <FormTitle /> */}
              <FormFeatureImage />

              {/* <FormIngredients /> */}
              {/* <FormInstruction /> */}

              <div className="flex justify-between pt-2 border-gray-300 border-t px-4">
                <button className="btn btn-cancel w-[70px]">Back</button>
                <button className="btn btn-accent w-[70px]">Next</button>
              </div>
            </div>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddRecipe;
