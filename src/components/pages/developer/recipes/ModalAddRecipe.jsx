import useUploadPhoto from "@/components/custom-hooks/useUploadPhoto.jsx";
import {
  InputCheckbox,
  InputPhotoUpload,
  InputSelect,
  InputText,
  InputTextArea,
} from "@/components/helpers/FormInputs.jsx";
import { devBaseImgUrl, ver } from "@/components/helpers/functions-general.jsx";
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
import { Minus, Plus, X, ImagePlusIcon } from "lucide-react";
import ModalWrapper from "../partials/modal/ModalWrapper.jsx";
import React from "react";
import * as Yup from "yup";
import SpinnerButton from "../partials/spinners/SpinnerButton.jsx";
import useQueryData from "@/components/custom-hooks/useQueryData.jsx";

const ModalAddRecipe = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
    "/v1/upload-photo",
    dispatch
  );

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v1/recipe/${itemEdit.recipe_aid}` : `/v1/recipe`,
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["recipe"],
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

  const {
    isLoading: loadingCategory,
    error: errorCategory,
    data: category,
  } = useQueryData(
    `/${ver}/category`, // endpoint
    "get", // method
    "category" // key
  );

  const {
    isLoading: loadingChef,
    error: errorChef,
    data: chef,
  } = useQueryData(
    `/${ver}/chef`, // endpoint
    "get", // method
    "chef" // key
  );

  const handleClose = () => {
    // dispatch(setIsAnimating(false));
    // setTimeout(() => {
    //   dispatch(setIsAnimating(true));
    dispatch(setIsAdd(false));
    // }, 300);
  };

  const initVal = {
    recipe_title: itemEdit ? itemEdit.chef_name : "",
    recipe_published: itemEdit ? itemEdit.chef_avatar : "",
    recipe_description: itemEdit ? itemEdit.chef_slug : "",
    recipe_thumbnail: itemEdit ? itemEdit.chef_bio : "",
    recipe_time: itemEdit ? itemEdit.chef_fullbio : "",
    recipe_tag: itemEdit ? itemEdit.chef_fullbio : "",
    recipe_category_id: itemEdit ? itemEdit.chef_fullbio : "",
    recipe_author_id: itemEdit ? itemEdit.chef_fullbio : "",
    recipe_isFeature: itemEdit ? itemEdit.chef_fullbio : "",
    recipe_isBanner: itemEdit ? itemEdit.chef_fullbio : "",
    recipe_serving: itemEdit ? itemEdit.chef_fullbio : "",
    recipe_ingredients: itemEdit ? itemEdit.chef_fullbio : "",
    recipe_instruction: itemEdit ? itemEdit.chef_fullbio : "",
    chef_name_old: itemEdit ? itemEdit.chef_name : "",
  };

  const yupSchema = Yup.object({
    // chef_bio: Yup.string().required("Required"),
    // chef_fullbio: Yup.string().required("Required"),
    // chef_name: Yup.string().required("Required"),
  });

  return (
    <>
      <ModalWrapper>
        <div className="modal-main bg-white max-w-[1200px] w-full z-50 min-h-[50dvh] rounded-md shadow-sm border border-gray-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  grid grid-rows-[auto_1fr_auto] py-2">
          <div className="modal-header px-4 py-2 border-b border-gray-300 flex justify-between items-center">
            Edit Recipe
            <button onClick={handleClose}>
              <X />
            </button>
          </div>
          <div className="modal-body ">
            <div className="grid grid-rows-[auto_1fr_auto] h-full ">
              <Formik
                initialValues={initVal}
                validationSchema={yupSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  // uploadPhoto();

                  if (photo === "") {
                    dispatch(setValidate(true));
                    dispatch(setMessage("Image Required"));
                    return;
                  }

                  mutation.mutate({
                    ...values,
                    recipe_slug: values.recipe_title.replaceAll(" ", "-"),
                    recipe_thumbnail:
                      (itemEdit && itemEdit.recipe_thumbnail === "") || photo
                        ? photo === null
                          ? itemEdit.recipe_thumbnail
                          : photo.name
                        : values.recipe_thumbnail,
                  });
                }}
              >
                {(props) => {
                  return (
                    <Form className="">
                      <div className="grid grid-cols-[3fr_1fr]  p-4 gap-2">
                        <main className="max-h-[700px] overflow-y-auto pr-5">
                          <div className="input-wrap">
                            <InputText
                              label="Name"
                              type="text"
                              name="recipe_title"
                              disabled={mutation.isPending}
                            />
                          </div>

                          <div className="input-wrap">
                            <InputTextArea
                              label="Description"
                              name="recipe_description"
                              className="!h-[80px] overflow-y-auto"
                              disabled={mutation.isPending}
                            />
                          </div>

                          <div className="input-wrap mb-2">
                            <label htmlFor="">Ingridents</label>
                            <div className="grid grid-cols-[1fr_150px_50px_80px] gap-5">
                              <input type="text" />
                              <select name="" id="">
                                <option value="">Pound</option>
                                <option value="">Kilo</option>
                                <option value="">Liter</option>
                                <option value="">Piece</option>
                                <option value="">Cup</option>
                              </select>
                              <input type="text" />
                              <div className="flex gap-2">
                                <button className="size-6 center-all rounded-full bg-accent text-white">
                                  <Plus size={15} />
                                </button>
                                <button className="size-6 center-all rounded-full bg-gray-300 text-white">
                                  <Minus />
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="input-wrap">
                            <InputTextArea
                              label="Instruction"
                              name="recipe_instruction"
                              className="!h-[300px] overflow-y-auto"
                              disabled={mutation.isPending}
                            />
                          </div>
                        </main>
                        <aside>
                          <div className="flex justify-end items-center gap-5 ">
                            <div className="flex gap-5">
                              <div className="flex gap-1">
                                <InputCheckbox
                                  label="Is Featured"
                                  type="checkbox"
                                  disabled={mutation.isLoading}
                                  name="recipe_isFeature"
                                />
                              </div>

                              <div className="flex gap-1">
                                <InputCheckbox
                                  label="Is Banner"
                                  type="checkbox"
                                  disabled={mutation.isLoading}
                                  name="recipe_isBanner"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="input-wrap">
                            <InputText
                              label="Published"
                              type="date"
                              name="recipe_published"
                              disabled={mutation.isPending}
                            />
                          </div>

                          <div className="input-wrap">
                            <InputSelect
                              label="Chef"
                              name="recipe_author_id"
                              disabled={mutation.isLoading || loadingCategory}
                            >
                              {loadingCategory ? (
                                <option value="" hidden>
                                  Loading...
                                </option>
                              ) : errorCategory ? (
                                <option value="" disabled>
                                  Error
                                </option>
                              ) : (
                                <optgroup label="Select Chef">
                                  <option value="" hidden></option>
                                  {chef?.data.length > 0 ? (
                                    <>
                                      {chef?.data.map((item, key) => {
                                        return (
                                          (item.chef_is_active === 1 ||
                                            (itemEdit &&
                                              Number(item.chef_aid) ===
                                                Number(
                                                  itemEdit.recipe_chef_id
                                                ))) && (
                                            <option
                                              value={item.chef_aid}
                                              key={key}
                                            >
                                              {item.chef_name}
                                            </option>
                                          )
                                        );
                                      })}
                                    </>
                                  ) : (
                                    <option value="" disabled>
                                      No data
                                    </option>
                                  )}
                                </optgroup>
                              )}
                            </InputSelect>
                          </div>

                          <div className="input-wrap">
                            <InputText
                              label="Serving"
                              type="text"
                              name="recipe_serving"
                              disabled={mutation.isPending}
                            />
                          </div>
                          <div className="input-wrap">
                            <InputText
                              label="Cooking Time"
                              type="text"
                              name="recipe_time"
                              disabled={mutation.isPending}
                            />
                          </div>
                          <div className="input-wrap">
                            <InputText
                              label="Tag"
                              type="text"
                              name="recipe_tag"
                              disabled={mutation.isPending}
                            />
                          </div>

                          <div className="input-wrap">
                            <InputSelect
                              label="Category"
                              name="recipe_category_id"
                              disabled={mutation.isLoading || loadingCategory}
                            >
                              {loadingCategory ? (
                                <option value="" hidden>
                                  Loading...
                                </option>
                              ) : errorCategory ? (
                                <option value="" disabled>
                                  Error
                                </option>
                              ) : (
                                <optgroup label="Select Category">
                                  <option value="" hidden></option>
                                  {category?.data.length > 0 ? (
                                    <>
                                      {category?.data.map((item, key) => {
                                        return (
                                          (item.category_is_active === 1 ||
                                            (itemEdit &&
                                              Number(item.category_aid) ===
                                                Number(
                                                  itemEdit.recipe_category_id
                                                ))) && (
                                            <option
                                              value={item.category_aid}
                                              key={key}
                                            >
                                              {item.category_title}
                                            </option>
                                          )
                                        );
                                      })}
                                    </>
                                  ) : (
                                    <option value="" disabled>
                                      No data
                                    </option>
                                  )}
                                </optgroup>
                              )}
                            </InputSelect>
                          </div>

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
                                    : devBaseImgUrl +
                                      "/" +
                                      itemEdit?.chef_avatar // check db
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
                        </aside>
                      </div>

                      <div className="modal-action ">
                        <button className="btn btn-save w-[70px]" type="submit">
                          Save
                        </button>
                        <button
                          className="btn btn-cancel w-[70px]"
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
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddRecipe;
