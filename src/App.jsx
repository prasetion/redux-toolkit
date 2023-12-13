import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menus from "./pages/Menus";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menus" element={<Menus />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
