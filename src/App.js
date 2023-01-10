import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Params from "./pages/Params";
import QueryStr from "./pages/QueryStr";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Links from "./components/Links";
import NavLinks from "./components/NavLinks";
function App(props) {
  const user = "";
  return (
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Routes>
        <Route path="/login" element={!user ? <Navigate to="" /> : <Login />} />
        <Route path="/params/:id" element={<Params />} />
        <Route path="/queryStr" element={<QueryStr />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
