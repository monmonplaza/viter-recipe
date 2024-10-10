import {
  InputFileUpload,
  InputPhotoUpload,
  InputText,
} from "@/components/helpers/FormInputs.jsx";
import {
  devApiUrl,
  devBaseImgUrl,
  fetchFormData,
  ver,
} from "@/components/helpers/functions-general.jsx";
import { queryData } from "@/components/helpers/queryData.jsx";
import {
  setError,
  setIsAdd,
  setIsAnimating,
  setMessage,
  setSuccess,
  setValidate,
} from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { CircleUser, ImageUp, Trash, User, X } from "lucide-react";
import React from "react";
import { useDropzone } from "react-dropzone";
import * as Yup from "yup";
import ModalWrapper from "../partials/modal/ModalWrapper.jsx";
import SpinnerButton from "../partials/spinners/SpinnerButton.jsx";

const ModalAddRecipeCategory = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [photo, setPhoto] = React.useState(null);

  const [isImgMounted, setIsImgMounted] = React.useState(false);
  const [isImgEditing, setIsEditing] = React.useState(false);

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
        uploadPhoto();
        queryClient.invalidateQueries({ queryKey: ["category"] });

        dispatch(setSuccess(true));
        dispatch(setMessage(`Record Successfully updated.`));
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
    category_title: itemEdit ? itemEdit.category_title : "",
    category_photo: itemEdit ? itemEdit.category_photo : "",
    category_url: itemEdit ? itemEdit.category_url : "",
    category_title_old: itemEdit ? itemEdit.category_title : "",
  };

  const yupSchema = Yup.object({
    category_title: Yup.string().required("Required"),
    // category_photo: Yup.string().required("Required"),
    category_url: Yup.string().required("Required"),
  });

  const { isDragAccept, acceptedFiles, getRootProps, getInputProps } =
    useDropzone({
      validator: customValidator,
      maxFiles: 1,
      maxSize: 100000,
      onDropRejected: () => {
        dispatch(setValidate(true));
        dispatch(
          setMessage(
            "Photo is too big. It should be less than 500Kb and 280x280px size for better result."
          )
        );
      },
      onDropAccepted: () => {
        setIsImgMounted(true);
      },
    });

  const uploadPhoto = async () => {
    if (photo) {
      const fd = new FormData();
      fd.append("photo", photo);

      const data = await fetchFormData(
        devApiUrl + `/v1/upload-photo`,
        fd,
        dispatch
      );
    }
  };

  function customValidator(file) {
    console.log(file);
    if (file.name === "") {
      console.log("error");
      return;
    } else {
      setPhoto(file.name);
    }
  }

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
              if (photo === null) {
                dispatch(setValidate(true));
                dispatch(setMessage("Image Required"));
                return;
              }
              console.log({
                ...values,
                category_photo: photo
                  ? photo
                  : itemEdit
                  ? itemEdit.category_photo
                  : "",
              });
              // uploadPhoto();
            }}
          >
            {(props) => {
              return (
                <Form className="">
                  <div className="modal-body p-2 min-h-[calc(99dvh-36px)] grid grid-rows-[1fr_auto]">
                    <div className="field-wrapper">
                      <div className="input-wrap">
                        {(!itemEdit || isImgEditing) && (
                          <>
                            {!isImgMounted && (
                              <div {...getRootProps({ className: "dropzone" })}>
                                <label htmlFor="">Upload Photo</label>
                                <div
                                  className={`border border-line h-[200px] w-full grid place-content-center  rounded-md transition-all cursor-pointer hover:border-accent hover:bg-accent hover:bg-opacity-[0.02] overflow-hidden  ${
                                    isDragAccept
                                      ? "!border-accent bg-accent bg-opacity-[0.02]"
                                      : ""
                                  }`}
                                >
                                  <div className="flex flex-col center-all ">
                                    <ImageUp
                                      size={50}
                                      className="opacity-10"
                                      strokeWidth={1}
                                    />
                                    <p className="text-sm opacity-25 mb-0 font-poppinsLight">
                                      Drag or click to upload photo
                                    </p>
                                  </div>
                                </div>

                                <InputFileUpload
                                  {...getInputProps()}
                                  name="category_photo"
                                  className="dragndrop"
                                  type="file"
                                  accept="image/*"
                                  value=""
                                />
                              </div>
                            )}
                            {isImgMounted && (
                              <div className="thumbnail mb-2">
                                {acceptedFiles.map((file, key) => (
                                  <div className="thumbnail relative" key={key}>
                                    <img
                                      src={`${URL.createObjectURL(file)}`}
                                      alt=""
                                      className="rounded-md w-full h-[240px] object-cover"
                                    />

                                    <button
                                      className="absolute top-2 left-2 tooltip opacity-100"
                                      data-tooltip="Remove"
                                      type="button"
                                      onClick={() => {
                                        setIsImgMounted(false);
                                        setPhoto(null);
                                      }}
                                    >
                                      <Trash className="text-red-500" />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            )}
                          </>
                        )}

                        {itemEdit && !isImgEditing && (
                          <div className="thumbnail relative border border-gray-300 rounded-md">
                            <img
                              src={`${devBaseImgUrl}/${itemEdit.category_photo}`}
                              alt=""
                              className="rounded-md w-full h-[240px] object-cover"
                            />

                            <button
                              className="absolute top-2 left-2 tooltip z-40"
                              data-tooltip="Remove"
                              type="button"
                              onClick={() => setIsEditing(true)}
                            >
                              <Trash className="text-red-500" />
                            </button>
                          </div>
                        )}
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
                        type="cancel"
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
