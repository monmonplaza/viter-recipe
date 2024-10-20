import {
  ChefHat,
  Chrome,
  CookingPot,
  FilePenLine,
  Grid2x2Plus,
  Package,
  PackageOpen,
  Plus,
  Search,
  Table,
  Trash,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../partials/Footer.jsx";
import Header from "../partials/Header.jsx";
import Navigation from "../partials/Navigation.jsx";
import PageTitleAdd from "../partials/PageTitleAdd.jsx";
import TableFilterStatus from "../partials/TableFilterStatus.jsx";
import TableSearch from "../partials/TableSearch.jsx";
import ModalAddRecipe from "./ModalAddRecipe.jsx";
import RecipesList from "./RecipesList.jsx";
import { StoreContext } from "@/components/store/StoreContext.jsx";
import { setIsAdd } from "@/components/store/StoreAction.jsx";

const Recipes = () => {
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
          <Navigation menu="Recipes" />
          <main className="primary-wrapper ">
            <Header />
            <div className="p-5">
              <PageTitleAdd title="Recipes" handleAdd={handleAdd} />
              <div className="main-wrapper">
                <TableFilterStatus />
                <RecipesList />
              </div>
            </div>
            <Footer />
          </main>
        </div>
      </section>
      {store.isAdd && <ModalAddRecipe />}
    </>
  );
};

export default Recipes;
