import useUploadPhoto from "@/components/custom-hooks/useUploadPhoto.jsx";
import {
  InputPhotoUpload,
  InputText,
} from "@/components/helpers/FormInputs.jsx";
import { devBaseImgUrl } from "@/components/helpers/functions-general.jsx";
import { queryData } from "@/components/helpers/queryData.jsx";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { File, ImagePlusIcon, User2, X } from "lucide-react";
import React from "react";
import * as Yup from "yup";
import ModalWrapper from "../partials/modal/ModalWrapper.jsx";
import SpinnerButton from "../partials/spinners/SpinnerButton.jsx";

const ModalAddRecipeCategory = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
    "/v1/upload-photo",
    dispatch
  );

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/category/${itemEdit.category_aid}` : `/v1/category`,
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

  console.log(itemEdit);

  const initVal = {
    category_title: itemEdit ? itemEdit.category_title : "",
    category_photo: itemEdit ? itemEdit.category_photo : "",
    category_url: itemEdit ? itemEdit.category_url : "",
    category_title_old: itemEdit ? itemEdit.category_title : "",
  };

  const yupSchema = Yup.object({
    category_title: Yup.string().required("Required"),
    category_photo: Yup.string().required("Required"),
    category_url: Yup.string().required("Required"),
  });

  return (
    <>
      <ModalWrapper>
        <div className="modal-main bg-white max-w-[300px] w-full z-50  rounded-md shadow-sm border border-gray-300 absolute right-1 top-1 grid grid-rows-[auto_1fr_auto]">
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

              mutation.mutate({
                ...values,
                category_photo:
                  (itemEdit?.category_photo === "" && photo) ||
                  (!photo && "") ||
                  (photo === undefined && "") ||
                  (photo && itemEdit?.category_photo !== photo?.name)
                    ? photo?.name || ""
                    : itemEdit?.category_photo || "",
              });
            }}
          >
            {(props) => {
              return (
                <Form className="">
                  <div className="modal-body p-2 min-h-[calc(99dvh-36px)] grid grid-rows-[1fr_auto]">
                    <div className="field-wrapper">
                      <div className="input-wrap relative  mt-5 group">
                        {itemEdit === null && photo === null ? (
                          <div className="w-full h-[150px] bg-gray-50 border border-gray-200 rounded-md flex justify-center items-center flex-col">
                            <ImagePlusIcon
                              size={50}
                              strokeWidth={1}
                              className="opacity-50"
                            />
                            <small>Upload Photo</small>
                          </div>
                        ) : (
                          <img
                            src={
                              photo
                                ? URL.createObjectURL(photo) // preview
                                : devBaseImgUrl + "/" + itemEdit.category_photo // check db
                            }
                            alt="employee photo"
                            className="group-hover:opacity-30 duration-200 relative rounded-full min-w-[3rem] min-h-[3rem] max-w-[3rem] max-h-[3rem] object-cover object-[50%,50%] m-auto"
                          />
                        )}
                        <File className="opacity-0 duration-200 group-hover:opacity-100 fill-dark/70 absolute top-0 right-0 bottom-0 left-0 min-w-[1.2rem] min-h-[1.2rem] max-w-[1.2rem] max-h-[1.2rem] m-auto cursor-pointer" />
                        <InputPhotoUpload
                          name="category_photo"
                          type="file"
                          id="photo"
                          accept="image/*"
                          title="Upload photo"
                          onChange={(e) => handleChangePhoto(e)}
                          className="opacity-0 absolute top-0 right-0 bottom-0 left-0 rounded-full  m-auto cursor-pointer w-full h-full"
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
                        {mutation.isPending ? <SpinnerButton /> : "Save"}
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
