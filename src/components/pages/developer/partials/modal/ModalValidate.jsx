import { setValidate } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { TriangleAlert, X } from "lucide-react";
import React from "react";
import SpinnerButton from "../spinners/SpinnerButton.jsx";
import ModalWrapper from "./ModalWrapper.jsx";

const ModalValidate = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const handleClose = () => {
    dispatch(setValidate(false));
  };
  return (
    <>
      <ModalWrapper>
        <div className="modal-main bg-white max-w-[300px] w-full z-50 rounded-md shadow-sm border border-gray-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-rows-[auto_1fr_auto] min-h-[180px]">
          <div className="modal-body p-2 py-5">
            <TriangleAlert className="mx-auto mb-2 text-info" size={50} />
            <p className="mb-0 text-center leading-normal">{store.message}</p>
          </div>

          <div className="modal-action [&>*]:w-[70%] justify-center">
            <button
              className="btn btn-info"
              type="button"
              onClick={handleClose}
            >
              Okay
            </button>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalValidate;
