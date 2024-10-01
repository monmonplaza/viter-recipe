import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./website/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`*`} element={<h3>page not found</h3>} />
        <Route path={`/`} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
