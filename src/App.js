import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Other from "./pages/Other";
function App() {
  const rand_0_9 = Math.floor(Math.random() * 10);
  return (
    <BrowserRouter>
      <Link to="/">home</Link>
      <div> </div>
      <Link to={`/about/${rand_0_9}`}>about</Link>
      <div> </div>
      <Link to="/other">other</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
