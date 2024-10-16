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
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { setIsAdd } from "@/components/store/StoreAction.jsx";
import ModalValidate from "../partials/modal/ModalValidate.jsx";
import Toast from "../partials/Toast.jsx";

const Chefs = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  return (
    <>
      <section className="recipes">
        <div className="flex min-h-screen">
          <Navigation menu="Chefs" />
          <main className="primary-wrapper ">
            <Header />
            <div className="p-5">
              <PageTitleAdd title="Chefs" handleAdd={handleAdd} />
              <div className="main-wrapper">
                <ChefsList setItemEdit={setItemEdit} />
              </div>
            </div>
            <Footer />
          </main>
        </div>
      </section>
      {store.isAdd && <ModalAddChefs itemEdit={itemEdit} />}

      {store.validate && <ModalValidate />}
      {store.success && <Toast />}
    </>
  );
};

export default Chefs;
