import React from "react";
import { devApiUrl, fetchFormData } from "../helpers/functions-general";
import { setError, setMessage } from "../store/StoreAction.jsx";

const useUploadPhoto = (url, dispatch) => {
  const [photo, setPhoto] = React.useState(null);

  const uploadPhoto = async () => {
    if (photo) {
      const fd = new FormData();
      fd.append("photo", photo);
      const data = await fetchFormData(devApiUrl + url, fd, dispatch);
      console.log(photo);
    }
  };

  const handleChangePhoto = (e) => {
    if (!e.target.files[0]) {
      setPhoto("");
      dispatch(setError(false));
      // dispatch(setErrorMessage(""));
      return;
    }

    const img = e.target.files[0];
    if (img.size > 5000) {
      dispatch(setError(true));
      dispatch(
        setMessage(
          "Photo is too big. It should be less than 5Kb and 80x80px size for better result."
        )
      );
    } else {
      dispatch(setError(false));
      setPhoto(img);
    }
  };

  return { uploadPhoto, handleChangePhoto, photo };
};

export default useUploadPhoto;
