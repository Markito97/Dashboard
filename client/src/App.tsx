import * as React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SIdeBar";
import { DashBoard } from "./components/dashboard/Dashboard";
import { Trades } from "./components/Trades";
import { Stocks } from "./components/Stocks";
import { Charts } from "./components/Charts";
import { ProductFrom } from "./components/ProductForm";
import { useState } from "react";

export const App = () => {
  const [isSale, setIsSale] = useState<string[]>(["aboba"]);
  const mockData = [
    {
      date: "DD-MM-YY",
      id: 1,
      title: "-/--/-",
      description: "-/--/-",
      category: "A",
      purchaseDollars: 100,
      marginPercent: 50,
      amount: 5,
      priceDollars: 150,
    },
    {
      date: "DD-MM-YY",
      id: 2,
      title: "T-/--/-",
      description: "-/--/-",
      category: "C",
      purchaseDollars: 200,
      marginPercent: 50,
      amount: 19,
      priceDollars: 350,
    },
    {
      date: "DD-MM-YY",
      id: 2,
      title: "-/--/-",
      description: "-/--/-",
      category: "B",
      purchaseDollars: 500,
      marginPercent: 50,
      amount: 15,
      priceDollars: 750,
    },
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="main__page">
          <SideBar />
          <Routes>
            <Route
              path={"/dashboard"}
              element={<DashBoard isSale={isSale} setIsSale={setIsSale} />}
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
