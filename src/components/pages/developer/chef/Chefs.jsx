import React from "react";
import Footer from "../partials/Footer.jsx";
import Header from "../partials/Header.jsx";
import ModalConfirm from "../partials/modal/ModalConfirm.jsx";
import ModalDelete from "../partials/modal/ModalDelete.jsx";
import ModalError from "../partials/modal/ModalError.jsx";
import Navigation from "../partials/Navigation.jsx";
import PageTitleAdd from "../partials/PageTitleAdd.jsx";
import TableFilterStatus from "../partials/TableFilterStatus.jsx";
import TableSearch from "../partials/TableSearch.jsx";
import ChefsList from "./ChefsList.jsx";
import ModalAddChefs from "./ModalAddChefs.jsx";

const Chefs = () => {
  return (
    <>
      <section className="recipes">
        <div className="flex min-h-screen">
          <Navigation menu="Chefs" />
          <main className="primary-wrapper ">
            <Header />
            <div className="p-5">
              <PageTitleAdd title="Chefs" />
              <div className="main-wrapper">
                <TableFilterStatus />
                <TableSearch />
                <ChefsList />
              </div>
            </div>
            <Footer />
          </main>
        </div>
      </section>
      {/* <ModalAddChefs /> */}

      {/* <ModalDelete /> */}
      {/* <ModalConfirm /> */}
      {/* <ModalError /> */}
    </>
  );
};

export default Chefs;
