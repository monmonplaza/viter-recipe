import { TriangleAlert, X } from "lucide-react";
import React from "react";
import SpinnerButton from "../spinners/SpinnerButton.jsx";
import ModalWrapper from "./ModalWrapper.jsx";

const ModalError = () => {
  return (
    <>
      <ModalWrapper>
        <div className="modal-main bg-white max-w-[300px] w-full z-50 rounded-md shadow-sm border border-gray-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-rows-[auto_1fr_auto] min-h-[180px]">
          <div className="modal-body p-2 py-5">
            <TriangleAlert className="mx-auto mb-2 text-alert" size={50} />
            <p className="mb-0 text-center leading-normal">
              Something went wrong! <br /> Try reloading the page. If problems
              persist, contact the developer
            </p>
          </div>

          <div className="modal-action [&>*]:w-[70%] justify-center">
            <button className="btn btn-alert" type="submit">
              <SpinnerButton />
              Okay
            </button>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalError;
