import * as React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./infuture/NavBar";
import { SideBar } from "./components/SIdeBar";
import { DashBoard } from "./pages/Dashboard";
import { ProductFrom } from "./infuture/ProductForm";
import { useState } from "react";

export const App = () => {
  const [largeTable, setLargeTable] = useState<any[]>([]);
  const [smallTable, setSmallTable] = useState([]);
  const [averageTable, setAverageTable] = useState([]);

  const changeLargeTable = (object: any) => {
    setLargeTable([...largeTable, object]);
  };

  const changeState = (value: object) => {};

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="main__page">
          <SideBar />
          <Routes>
            <Route
              path={"/dashboard"}
              element={
                <DashBoard largeTable={largeTable} large={changeLargeTable} />
              }
            />
            <Route path={"/productform"} element={<ProductFrom />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
