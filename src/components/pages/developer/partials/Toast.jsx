import { setSuccess } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { Check, CircleCheck, X } from "lucide-react";
import React from "react";

const Toast = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [width, setWidth] = React.useState(100);
  const handleClose = () => {
    dispatch(setSuccess(false));
  };

  React.useEffect(() => {
    setTimeout(() => {
      let intervalID = setInterval(() => {
        if (setWidth === 0) {
          clearInterval(intervalID);
        } else {
          setWidth((prev) => prev - 1);
        }
      }, 38);
    }, 0);

    setTimeout(() => {
      handleClose();
    }, 2000);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-[300px] w-full ">
      <div className="py-2 px-4 relative bg-white shadow-sm rounded-md flex gap-2 items-center">
        <div className="p-1 bg-green-100 rounded-full">
          <CircleCheck fill={"#00ff00"} stroke={"#dcfce7"} />
        </div>
        <div>
          <h6 className="font-poppinsRegular text-xs text-success leading-none">
            Success
          </h6>
          <small className="opacity-60">{store.message}</small>
        </div>
        <button className="ml-auto">
          <X size={20} onClick={handleClose} className="text-gray-300" />
        </button>
        <span
          className={`bar h-0.5 bg-success absolute bottom-0 left-0 transition-all`}
          style={{ width: `${width}%` }}
        ></span>
      </div>
    </div>
  );
};

export default Toast;
