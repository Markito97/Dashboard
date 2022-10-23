import * as React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./infuture/NavBar";
import { SideBar } from "./components/SIdeBar";
import { DashBoard } from "./pages/Dashboard";
import { ProductFrom } from "./infuture/ProductForm";
import { useState } from "react";
import { toUnicode } from "punycode";

export const App = () => {
  const [tables, setTables] = useState<any[]>([
    {
      id: 1,
      checked: false,
      tableSize: "small",
    },
    {
      id: 2,
      checked: false,
      tableSize: "average",
    },
    {
      id: 3,
      checked: false,
      tableSize: "average",
    },
  ]);
  const [largeTable, setLargeTable] = useState<any[]>([]);

  // const changeLargeTable = (object: any) => {
  //   setLargeTable([...largeTable, object]);
  // };

  // const createTable = (table: any) => {
  //   setTables([...tables, table]);
  // };

  const checkedHandler = (res: object[]) => {
    setTables(res);
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
                  // large={changeLargeTable}
                  // createTable={createTable}
                  checkedHandler={checkedHandler}
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
