import * as React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SIdeBar";
import { DashBoard } from "./components/dashboard/Dashboard";
import { Trades } from "./components/Trades";
import { Stocks } from "./components/Stocks";
import { Charts } from "./components/Charts";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="main__page">
          <SideBar />
          <Routes>
            <Route path={"/dashboard"} element={<DashBoard />} />
            <Route path={"/trades"} element={<Trades />} />
            <Route path={"/stocks"} element={<Stocks />} />
            <Route path={"/charts"} element={<Charts />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
