import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Header from "../header/Header";
import About from "../about/About";
import Test from "../test/Test";

import { AppWrapper } from "./App.style";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppWrapper>
        <Routes>
          <Route path="/" Component={Test} />
          <Route path="/about" Component={About} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
};
export default App;
