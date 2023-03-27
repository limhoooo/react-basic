import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import { Calendar } from 'antd';
import Home from "./pages/Home";
import Params from "./pages/Params";
import QueryStr from "./pages/QueryStr";
import NotFound from "./pages/NotFound";
import NavLinks from "./components/route/NavLinks";
import Login from "./pages/Login";
import HocTest from "./components/hoc/HocTest";
import ParentControlledComponent from './components/controlledComponent/ParentControlledComponent';
import Communication from './components/communication/Communication';
import Props from "./components/communication/props/Props";
import Emit from "./components/communication/props/Emit";
import Context from "./components/context/Context";
import ReduxContainer from './components/redux/ReduxContainer';


function App({ store }) {
  // const onPanelChange = (value, mode) => {
  //   console.log(value.format('YYYY-MM-DD'), mode);
  // };


  const Hook = React.lazy(() => import('./components/hook/Hook'))


  return (
    <div className="App" style={{ display: 'flex', height: '100%' }}>

      <BrowserRouter>
        <NavLinks />
        <Routes>
          <Route path="/login" element={<Login test="asd" />} />
          <Route path="/params/:id" element={<Params />} />
          <Route path="/queryStr" element={<QueryStr />} />
          <Route path="/hoc" element={<HocTest />} />
          <Route path="/controlledComponent" element={<ParentControlledComponent />} />

          <Route path="/hook" element={
          <React.Suspense fallback={<>loding...</>}>
            <Hook />
          </React.Suspense>} />

          <Route path="/communication" element={<Communication />}>
            <Route path="/communication/props" element={<Props />} />
            <Route path="/communication/emit" element={<Emit />} />
          </Route>
          <Route path="/context" element={<Context />} />
          <Route path="/redux" element={<ReduxContainer />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}
export default App;
