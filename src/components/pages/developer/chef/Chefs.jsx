import { setIsAdd } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import Footer from "../partials/Footer.jsx";
import Header from "../partials/Header.jsx";
import ModalValidate from "../partials/modal/ModalValidate.jsx";
import Navigation from "../partials/Navigation.jsx";
import PageTitleAdd from "../partials/PageTitleAdd.jsx";
import Toast from "../partials/Toast.jsx";
import ChefsList from "./ChefsList.jsx";
import ModalAddChefs from "./ModalAddChefs.jsx";

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
