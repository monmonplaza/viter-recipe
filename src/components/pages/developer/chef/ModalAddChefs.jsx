import useUploadPhoto from "@/components/custom-hooks/useUploadPhoto.jsx";
import {
  InputPhotoUpload,
  InputText,
  InputTextArea,
} from "@/components/helpers/FormInputs.jsx";
import { devBaseImgUrl } from "@/components/helpers/functions-general.jsx";
import { queryData } from "@/components/helpers/queryData.jsx";
import {
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { CircleUser, ImagePlusIcon, ImageUp, X } from "lucide-react";
import React from "react";
import * as Yup from "yup";
import ModalWrapper from "../partials/modal/ModalWrapper.jsx";
import SpinnerButton from "../partials/spinners/SpinnerButton.jsx";

const ModalAddChefs = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
    "/v1/upload-photo",
    dispatch
  );

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/chef/${itemEdit.chef_aid}` : `/v1/chef`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["chef"],
      });

      // show error box
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully updated.`));
        dispatch(setIsAdd(false));
      }
    },
  });

  const handleClose = () => {
    // dispatch(setIsAnimating(false));
    // setTimeout(() => {
    //   dispatch(setIsAnimating(true));
    dispatch(setIsAdd(false));
    // }, 300);
  };

  const initVal = {
    chef_name: itemEdit ? itemEdit.chef_name : "",
    chef_avatar: itemEdit ? itemEdit.chef_avatar : "",
    chef_slug: itemEdit ? itemEdit.chef_slug : "",
    chef_bio: itemEdit ? itemEdit.chef_bio : "",
    chef_fullbio: itemEdit ? itemEdit.chef_fullbio : "",
    chef_name_old: itemEdit ? itemEdit.chef_name : "",
  };

  const yupSchema = Yup.object({
    chef_bio: Yup.string().required("Required"),
    chef_fullbio: Yup.string().required("Required"),
    chef_name: Yup.string().required("Required"),
  });

  return (
    <>
      <ModalWrapper>
        <div className="modal-main bg-white max-w-[800px] w-full z-50 min-h-[30dvh] rounded-md shadow-sm border border-gray-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  grid grid-rows-[auto_1fr_auto]">
          <div className="modal-header p-2 border-b border-gray-300 flex justify-between items-center">
            Edit Recipe
            <button onClick={handleClose}>
              <X size={16} />
            </button>
          </div>
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              uploadPhoto();

              if (photo === "") {
                dispatch(setValidate(true));
                dispatch(setMessage("Image Required"));
                return;
              }

              mutation.mutate({
                ...values,
                chef_slug: values.chef_name.replaceAll(" ", "-"),
                chef_avatar:
                  (itemEdit && itemEdit.chef_avatar === "") || photo
                    ? photo === null
                      ? itemEdit.chef_avatar
                      : photo.name
                    : values.chef_avatar,
              });
            }}
          >
            {(props) => {
              return (
                <Form className="">
                  <div className="modal-body p-4  min-h-[350px] grid grid-rows-[1fr_auto]">
                    <div className="grid grid-cols-[300px_1fr] gap-4">
                      <aside className="main-aside">
                        <div className="input-wrap relative  mt-5 group input-photo-wrap">
                          {itemEdit === null && photo === null ? (
                            <div className="w-full h-[150px] bg-gray-50 border border-gray-200 rounded-md flex justify-center items-center flex-col">
                              <ImagePlusIcon
                                size={50}
                                strokeWidth={1}
                                className="opacity-20 group-hover:opacity-50 transition-opacity"
                              />
                              <small className="opacity-20 group-hover:opacity-50 transition-opacity">
                                Upload Photo
                              </small>
                            </div>
                          ) : (
                            <img
                              src={
                                photo
                                  ? URL.createObjectURL(photo) // preview
                                  : devBaseImgUrl + "/" + itemEdit?.chef_avatar // check db
                              }
                              alt="employee photo"
                              className="group-hover:opacity-30 duration-200 relative rounded-full w-[150px] h-[150px] object-cover object-[50%,50%] m-auto"
                            />
                          )}

                          <InputPhotoUpload
                            name="photo"
                            type="file"
                            id="photo"
                            accept="image/*"
                            title="Upload photo"
                            onChange={(e) => handleChangePhoto(e)}
                            onDrop={(e) => handleChangePhoto(e)}
                            className="opacity-0 absolute top-0 right-0 bottom-0 left-0 rounded-full  m-auto cursor-pointer w-full h-full"
                          />
                        </div>

                        <div className="input-wrap">
                          <InputText
                            label="Name"
                            type="text"
                            name="chef_name"
                            disabled={mutation.isPending}
                          />
                        </div>

                        <div className="input-wrap">
                          <InputTextArea
                            label="Bio"
                            name="chef_bio"
                            className="min-h-[70px]"
                            disabled={mutation.isPending}
                          />
                        </div>
                      </aside>
                      <div className="main-content">
                        <div className="input-wrap">
                          <InputTextArea
                            label="Profile"
                            name="chef_fullbio"
                            className="xl"
                            disabled={mutation.isPending}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="modal-action ">
                    <button
                      className="btn btn-save basis-[100px]"
                      type="submit"
                    >
                      {mutation.isPending ? <SpinnerButton /> : "Save"}
                    </button>
                    <button
                      className="btn btn-cancel basis-[100px]"
                      type="reset"
                      onClick={handleClose}
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddChefs;
