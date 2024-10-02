import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./website/Home";
import Single from "./website/single/Single.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`*`} element={<h3>page not found</h3>} />
        <Route path={`/`} element={<Home />} />
        <Route path={`/single`} element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
