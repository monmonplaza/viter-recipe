import { Trash, X } from "lucide-react";
import React from "react";
import SpinnerButton from "../spinners/SpinnerButton.jsx";
import ModalWrapper from "./ModalWrapper.jsx";

const ModalDelete = () => {
  return (
    <div>
      <ModalWrapper>
        <div className="modal-main bg-white max-w-[500px] w-full z-50 rounded-md shadow-sm border border-gray-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-rows-[auto_1fr_auto] min-h-[180px]">
          <div className="modal-header p-2 border-b border-gray-300 flex justify-between items-center">
            <span className="text-alert flex items-center gap-1">
              <Trash size={14} /> Delete
            </span>
            <button>
              <X size={16} />
            </button>
          </div>

          <div className="modal-body p-2 flex items-center justify-center">
            <p className="mb-0 text-center leading-snug">
              Are your sure you want to delete this record - "Record Name"
            </p>
            <p className="my-2 text-alert px-2 py-0.5 bg-alert bg-opacity-20 text-xs text-center w-fit mx-auto">
              NOTE: This action is irreversable
            </p>
          </div>

          <div className="modal-action [&>*]:w-auto">
            <button className="btn btn-alert" type="submit">
              <SpinnerButton />
              Save
            </button>
            <button className="btn btn-cancel" type="cancel">
              Cancel
            </button>
          </div>
        </div>
      </ModalWrapper>
    </div>
  );
};

export default ModalDelete;
