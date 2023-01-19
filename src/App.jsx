import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Calendar } from 'antd';
import Home from "./pages/Home";
import Params from "./pages/Params";
import QueryStr from "./pages/QueryStr";
import NotFound from "./pages/NotFound";
import NavLinks from "./components/route/NavLinks";
import Login from "./pages/Login";
import HocTest from "./components/hoc/HocTest";
import ParentControlledComponent from './components/controlledComponent/ParentControlledComponent';
import Hook from './components/hook/Hook';

function App() {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return (
    <BrowserRouter>
      <NavLinks />
      {/* <Calendar onPanelChange={onPanelChange} /> */}

      <Routes>
        <Route path="/login" element={<Login test="asd" />} />
        <Route path="/params/:id" element={<Params />} />
        <Route path="/queryStr" element={<QueryStr />} />
        <Route path="/hoc" element={<HocTest />} />
        <Route path="/controlledComponent" element={<ParentControlledComponent />} />
        <Route path="/hook" element={<Hook />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
