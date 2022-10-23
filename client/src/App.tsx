import * as React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./infuture/NavBar";
import { SideBar } from "./components/SIdeBar";
import { DashBoard } from "./pages/Dashboard";
import { ProductFrom } from "./infuture/ProductForm";
import { useState } from "react";

export const App = () => {
  const [tables, setTables] = useState<any[]>([]);
  const [largeTable, setLargeTable] = useState<any[]>([]);
  const [smallTable, setSmallTable] = useState([]);
  const [averageTable, setAverageTable] = useState([]);

  const changeLargeTable = (object: any) => {
    setLargeTable([...largeTable, object]);
  };

  const changeState = (value: object) => {};

  const createTable = (table: any) => {
    setTables([...tables, table]);
  };

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
                <DashBoard
                  tables={tables}
                  largeTable={largeTable}
                  large={changeLargeTable}
                  createTable={createTable}
                />
              }
            />
            <Route path={"/productform"} element={<ProductFrom />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
