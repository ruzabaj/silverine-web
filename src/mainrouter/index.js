import React from "react";
import App from "../App";
import Learn from "../Pages/learnMore";
import { Route, Routes } from "react-router-dom";
import About from '../Pages/about';
import Choose from '../Pages/choose';
import Upgrade from '../Pages/upgrade';

const Mainrouter = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<App />}></Route>
        <Route path="/learn-more" element={<Learn />}></Route>
        <Route path="/upgrade" element={<Upgrade/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/choose" element={<Choose />}></Route>
      </Routes>
    </div>
  );
};

export default Mainrouter;
