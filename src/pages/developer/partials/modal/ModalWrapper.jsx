import React from "react";

const ModalWrapper = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 z-30 w-full h-screen ">
      <div className="bg-dark absolute top-0 left-0 h-full w-full bg-opacity-20"></div>
      {children}
    </div>
  );
};

export default ModalWrapper;
