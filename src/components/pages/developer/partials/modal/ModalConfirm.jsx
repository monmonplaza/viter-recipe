import { queryData } from "@/components/helpers/queryData.jsx";
import {
  setIsAnimating,
  setIsConfirm,
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Archive, ArchiveRestore, X } from "lucide-react";
import React from "react";
import SpinnerButton from "../spinners/SpinnerButton.jsx";
import ModalWrapper from "./ModalWrapper.jsx";

const ModalConfirm = ({ mysqlApiArchive, queryKey, item, active }) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(mysqlApiArchive, "put", values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });

      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setIsConfirm(false));
        dispatch(setSuccess(true));
        dispatch(setMessage("Record updated"));
      }
    },
  });

  const handleYes = async () => {
    mutation.mutate({
      isActive: active ? 1 : 0,
    });
  };

  const handleClose = () => {
    // dispatch(setIsAnimating(false));
    // setTimeout(() => {
    //   dispatch(setIsAnimating(true));
    dispatch(setIsConfirm(false));
    // }, 500);
  };

  return (
    <>
      <ModalWrapper>
        <div className="modal-main bg-white max-w-[500px] w-full z-50 rounded-md shadow-sm border border-gray-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-rows-[auto_1fr_auto] min-h-[180px]">
          <div className="modal-header p-2 border-b border-gray-300 flex justify-between items-center">
            <span className="text-warning flex items-center gap-1">
              {active ? (
                <>
                  <ArchiveRestore size={14} /> Restore
                </>
              ) : (
                <>
                  <Archive size={14} /> Archive
                </>
              )}
            </span>
            <button onClick={handleClose}>
              <X size={16} />
            </button>
          </div>

          <div className="modal-body p-2 flex items-center justify-center">
            <p className="mb-0 text-center leading-snug">
              Are your sure you want to {active ? "restore" : "archive"} this
              record - "{item}"
            </p>
          </div>

          <div className="modal-action [&>*]:w-auto">
            <button
              className="btn btn-warning"
              type="submit"
              onClick={handleYes}
              disabled={mutation.isPending}
            >
              {mutation.isPending ? (
                <SpinnerButton />
              ) : active ? (
                "Restore"
              ) : (
                "Archive"
              )}
            </button>
            <button
              className="btn btn-cancel"
              type="reset"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalConfirm;
