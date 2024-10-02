import React from "react";

const Books = () => {
  return (
    <section className="py-20 bg-[url('./public/img/bg-banner-books.webp')] bg-cover bg-center bg-no-repeat">
      <div className="container">
        <div className=" max-w-[430px] w-full">
          <h2>Check out my newest vegan recipes books</h2>
          <p className="mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam nulla
            tempora, magnam aut modi atque eum itaque voluptate alias
            asperiores.
          </p>

          <div className="grid grid-cols-3 gap-5">
            <img
              src="https://via.placeholder.com/150x220"
              alt=""
              className="w-full"
            />
            <img
              src="https://via.placeholder.com/150x220"
              alt=""
              className="w-full"
            />
            <img
              src="https://via.placeholder.com/150x220"
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;
