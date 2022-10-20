import * as React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SIdeBar";
import { DashBoard } from "./components/Dashboard";
import { Trades } from "./components/Trades";
import { Stocks } from "./components/Stocks";
import { Charts } from "./components/Charts";
import { ProductFrom } from "./components/ProductForm";
import { useState } from "react";

export const App = () => {
  const [sales, setSales] = useState<string[]>(["123", "123", "123"]);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="main__page">
          <SideBar />
          <Routes>
            <Route
              path={"/dashboard"}
              element={<DashBoard sales={sales} setSales={setSales} />}
            />
            <Route path={"/trades"} element={<Trades />} />
            <Route path={"/stocks"} element={<Stocks />} />
            <Route path={"/charts"} element={<Charts />} />
            <Route path={"/productform"} element={<ProductFrom />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
