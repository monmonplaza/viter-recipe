import useUploadPhoto from "@/components/custom-hooks/useUploadPhoto.jsx";
import { InputText } from "@/components/helpers/FormInputs copy.jsx";
import { InputPhotoUpload } from "@/components/helpers/FormInputs.jsx";
import { devBaseImgUrl, ver } from "@/components/helpers/functions-general.jsx";
import { queryData } from "@/components/helpers/queryData.jsx";
import {
  setIsAdd,
  setIsAnimating,
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { CircleUser, ImageUp, X } from "lucide-react";
import React from "react";
import * as Yup from "yup";
import ModalWrapper from "../partials/modal/ModalWrapper.jsx";
import SpinnerButton from "../partials/spinners/SpinnerButton.jsx";

const ModalAddRecipeCategory = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/${ver}/category/${itemEdit.category_aid}`
          : `/${ver}/category`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["category"],
      });

      // show error box
      if (!data.success) {
        dispatch(setValidate(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setSuccess(true));
        dispatch(setMessage(`Record Successfully updated.`));
        dispatch(setIsAdd(false));
      }
    },
  });

  const handleClose = () => {
    dispatch(setIsAnimating(false));
    setTimeout(() => {
      dispatch(setIsAnimating(true));
      dispatch(setIsAdd(false));
    }, 300);
  };

  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
    `/${ver}/upload-photo`,
    dispatch
  );

  const initVal = {
    category_title: itemEdit ? itemEdit.category_title : "",
    category_photo: itemEdit ? itemEdit.category_photo : "",
    category_url: itemEdit ? itemEdit.category_url : "",
    category_title_old: itemEdit ? itemEdit.category_title : "",
  };

  const yupSchema = Yup.object().shape({
    category_title: Yup.string().required("Required"),
  });

  return (
    <>
      <ModalWrapper>
        <div className="modal-main bg-white max-w-[300px] w-full z-50 min-h-[99dvh] rounded-md shadow-sm border border-gray-300 absolute right-1 top-1 grid grid-rows-[auto_1fr_auto]">
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
              console.log(values);
              uploadPhoto();
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="modal-body p-2">
                    <div className="input-wrap">
                      <label htmlFor="">Upload Photo</label>
                      <div className="relative  group">
                        {itemEdit === null && photo === null ? (
                          <CircleUser className="group-hover:opacity-30 duration-200 relative rounded-full size-[100px] object-cover m-auto fill-gray-400" />
                        ) : (
                          <img
                            src={
                              photo
                                ? URL.createObjectURL(photo) // preview
                                : devBaseImgUrl + "/" + itemEdit?.category_photo // check db
                            }
                            alt="employee photo"
                            className="group-hover:opacity-30 duration-200 relative  w-full h-[200px] object-cover m-auto rounded-md"
                          />
                        )}
                      </div>

                      <ImageUp className="opacity-0 duration-200 group-hover:opacity-100  absolute top-0 right-0 bottom-0 left-0  m-auto cursor-pointer" />
                      <InputPhotoUpload
                        name="photo"
                        type="file"
                        id="myFile"
                        accept="image/*"
                        title="Upload photo"
                        onChange={(e) => handleChangePhoto(e)}
                        className="opacity-0 absolute top-0 right-0 bottom-0 left-0 rounded-full size-[100px] m-auto cursor-pointer"
                      />
                    </div>

                    <div className="input-wrap">
                      <InputText
                        label="Title"
                        type="text"
                        name="category_title"
                        disabled={mutation.isLoading}
                      />
                    </div>

                    <div className="input-wrap">
                      <InputText
                        label="URL"
                        type="text"
                        name="category_url"
                        disabled={mutation.isLoading}
                      />
                    </div>
                  </div>

                  <div className="modal-action ">
                    <button className="btn btn-save" type="submit">
                      <SpinnerButton />
                      Save
                    </button>
                    <button
                      className="btn btn-cancel"
                      type="cancel"
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

export default ModalAddRecipeCategory;
