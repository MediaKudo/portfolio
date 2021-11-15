import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./Pages/Components/Error404";
import Home from "./Pages/Components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
