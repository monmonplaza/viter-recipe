import { CircleUser, ImageUp, X } from "lucide-react";
import ModalWrapper from "../partials/modal/ModalWrapper.jsx";
import SpinnerButton from "../partials/spinners/SpinnerButton.jsx";

const ModalAddChefs = () => {
  return (
    <>
      <ModalWrapper>
        <div className="modal-main bg-white max-w-[1200px] w-full z-50 min-h-[60dvh] rounded-md shadow-sm border border-gray-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  grid grid-rows-[auto_1fr_auto]">
          <div className="modal-header p-2 border-b border-gray-300 flex justify-between items-center">
            Edit Recipe
            <button>
              <X size={16} />
            </button>
          </div>

          <div className="modal-body p-2">
            <div className="grid grid-cols-[300px_1fr] gap-5">
              <aside className="main-aside">
                <div className="input-wrap">
                  {/* {itemEdit && ( */}
                  <label htmlFor="">Avatar</label>
                  <div className="relative  group">
                    {true === null ? (
                      <CircleUser className="group-hover:opacity-30 duration-200 relative rounded-full size-[100px] object-cover m-auto fill-gray-400" />
                    ) : (
                      <img
                        src={"https:via.placeholder.com/150"}
                        // photo
                        //   ? URL.createObjectURL(photo) // preview
                        //   : devBaseImgUrl + "/" + "xxx" // check db
                        // }
                        alt="employee photo"
                        className="group-hover:opacity-30 duration-200 relative   w-[80px] h-[80px] object-cover m-auto rounded-full "
                      />
                    )}

                    <ImageUp className="opacity-0 duration-200 group-hover:opacity-100  absolute top-0 right-0 bottom-0 left-0  m-auto cursor-pointer" />
                    {/* <InputPhotoUpload
                  name="photo"
                  type="file"
                  id="myFile"
                  accept="image/*"
                  title="Upload photo"
                  // onChange={handleChangePhoto}
                  className="opacity-0 absolute top-0 right-0 bottom-0 left-0 rounded-full size-[100px] m-auto cursor-pointer"
                /> */}
                  </div>
                  {/* )} */}
                </div>

                <div className="input-wrap">
                  {/* {itemEdit && ( */}
                  <label htmlFor="">Banner Image</label>
                  <div className="relative  group">
                    {true === null ? (
                      <CircleUser className="group-hover:opacity-30 duration-200 relative rounded-full size-[100px] object-cover m-auto fill-gray-400" />
                    ) : (
                      <img
                        src={"https:via.placeholder.com/150"}
                        // photo
                        //   ? URL.createObjectURL(photo) // preview
                        //   : devBaseImgUrl + "/" + "xxx" // check db
                        // }
                        alt="employee photo"
                        className="group-hover:opacity-30 duration-200 relative  w-full h-[200px] object-cover m-auto rounded-md"
                      />
                    )}

                    <ImageUp className="opacity-0 duration-200 group-hover:opacity-100  absolute top-0 right-0 bottom-0 left-0  m-auto cursor-pointer" />
                    {/* <InputPhotoUpload
                  name="photo"
                  type="file"
                  id="myFile"
                  accept="image/*"
                  title="Upload photo"
                  // onChange={handleChangePhoto}
                  className="opacity-0 absolute top-0 right-0 bottom-0 left-0 rounded-full size-[100px] m-auto cursor-pointer"
                /> */}
                  </div>
                  {/* )} */}
                </div>
              </aside>
              <div className="main-content">
                <div className="input-wrap">
                  <label htmlFor="">Title</label>
                  <input type="text" />
                </div>

                <div className="input-wrap">
                  <label htmlFor="">URL</label>
                  <input type="text" />
                </div>

                <div className="input-wrap">
                  <label htmlFor="">Profile</label>
                  <textarea name="" id="" className="xl"></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-2 border-gray-300 border-t p-2 gap-4">
            <button className="btn btn-cancel w-[70px]">Back</button>
            <button className="btn btn-accent w-[70px]">Next</button>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddChefs;
