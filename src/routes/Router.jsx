import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wishtree from "./Wishtree";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wishtree />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
