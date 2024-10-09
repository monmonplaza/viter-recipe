import { setIsAdd } from "@/components/store/StoreAction.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import React from "react";
import Footer from "../partials/Footer.jsx";
import Header from "../partials/Header.jsx";
import Navigation from "../partials/Navigation.jsx";
import PageTitleAdd from "../partials/PageTitleAdd.jsx";
import TableFilterStatus from "../partials/TableFilterStatus.jsx";
import TableSearch from "../partials/TableSearch.jsx";
import ModalAddRecipeCategory from "./ModalAddRecipeCategory.jsx";
import CategoryList from "./RecipeCategoryList.jsx";

const RecipeCategory = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  return (
    <>
      <section className="recipes">
        <div className="flex h-screen">
          <Navigation menu="Category" />
          <main className="primary-wrapper ">
            <Header />
            <div className="p-5">
              <PageTitleAdd title="Category" handleAdd={handleAdd} />
              <div className="main-wrapper">
                <TableFilterStatus />
                <CategoryList setItemEdit={setItemEdit} />
              </div>
            </div>
            <Footer />
          </main>
        </div>
      </section>
      {store.isAdd && <ModalAddRecipeCategory itemEdit={itemEdit} />}
    </>
  );
};

export default RecipeCategory;
