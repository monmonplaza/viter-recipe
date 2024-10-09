import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import RecipeCategory from "./components/pages/developer/category/RecipeCategory.jsx";
import RecipeCategoryList from "./components/pages/developer/category/RecipeCategoryList.jsx";
import Chefs from "./components/pages/developer/chef/Chefs.jsx";
import Recipes from "./components/pages/developer/recipes/Recipes.jsx";
import { StoreProvider } from "./components/store/StoreContext.jsx";
import Category from "./components/website/category/Category.jsx";
import Chef from "./components/website/chef/Chef.jsx";
import Home from "./components/website/home/Home.jsx";
import Single from "./components/website/single/Single.jsx";

function App() {
  const queryClient = new QueryClient();

  function ScrollToTop() {
    const { pathname } = useLocation();
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path={`*`} element={<h3>page not found</h3>} />
            <Route path={`/`} element={<Home />} />
            <Route path="/category/:slug" element={<Category />} />
            <Route path="/recipe/:slug" element={<Single />} />
            <Route path="/chef/:slug" element={<Chef />} />
            <Route path="/admin/recipes" element={<Recipes />} />
            <Route path="/admin/category" element={<RecipeCategory />} />
            <Route path="/admin/chefs" element={<Chefs />} />
          </Routes>
        </Router>
      </StoreProvider>
    </QueryClientProvider>
  );
}

export default App;
