import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Params from "./pages/Params";
import QueryStr from "./pages/QueryStr";
import NotFound from "./pages/NotFound";
import NavLinks from "./components/NavLinks";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <NavLinks />
      <Routes>
        <Route path="/login" element={<Login test="asd" />} />
        <Route path="/params/:id" element={<Params />} />
        <Route path="/queryStr" element={<QueryStr />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
