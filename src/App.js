import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Params from "./pages/Params";
import QueryStr from "./pages/QueryStr";
import NotFound from "./pages/NotFound";
import Links from "./components/Links";
function App() {
  return (
    <BrowserRouter>
      <Links />
      <Routes>
        <Route path="/params/:id" element={<Params />} />
        <Route path="/queryStr" element={<QueryStr />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
