import React from "react";

const AsideNewsletter = () => {
  return (
    <>
      <div className="aside-box p-5 border bg-gray-200 text-center mb-10">
        <h4>Never Miss A post!</h4>
        <p className="mb-3">
          Signup for free and be the first to get notified on new updates.
        </p>

        <form action="">
          <input
            type="text"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300"
          />
          <button className="bg-dark w-full text-light p-3 mt-3 uppercase">
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
};

export default AsideNewsletter;
