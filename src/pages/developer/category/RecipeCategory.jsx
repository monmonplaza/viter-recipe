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
  return (
    <>
      <section className="recipes">
        <div className="flex h-screen">
          <Navigation menu="Category" />
          <main className="primary-wrapper ">
            <Header />
            <div className="p-5">
              <PageTitleAdd title="Category" />
              <div className="main-wrapper">
                <TableFilterStatus />
                <TableSearch />
                <CategoryList />
              </div>
            </div>
            <Footer />
          </main>
        </div>
      </section>
      <ModalAddRecipeCategory />
    </>
  );
};

export default RecipeCategory;
