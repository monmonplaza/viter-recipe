import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Category from "./website/category/Category.jsx";
import Chef from "./website/chef/Chef.jsx";
import Home from "./website/home/Home";
import Single from "./website/single/Single.jsx";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path={`*`} element={<h3>page not found</h3>} />
        <Route path={`/`} element={<Home />} />
        <Route path="/category/:slug" element={<Category />} />
        <Route path="/recipe/:slug" element={<Single />} />
        <Route path="/chef/:slug" element={<Chef />} />
      </Routes>
    </Router>
  );
}

export default App;
