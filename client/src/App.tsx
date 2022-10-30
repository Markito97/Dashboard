import * as React from "react";
import "./styles/App.css";
import "./styles/reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./infuture/NavBar";
import { SideBar } from "./components/SIdeBar";
import { DashBoard } from "./pages/Dashboard";
import { ProductFrom } from "./infuture/ProductForm";
import { useState } from "react";
import { CreateTable } from "./components/CreateTables";

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
      tableSize: "large",
    },
  ]);
  const [largeTable, setLargeTable] = useState<any[]>([]);

  // const changeLargeTable = (object: any) => {
  //   setLargeTable([...largeTable, object]);
  // };

  const createTable = (table: any) => {
    setTables([...tables, table]);
  };

  const checkedHandler = (res: object[]) => {
    setTables(res);
  };

  return (
    <div className="wrapper">
      <NavBar />
      <div className="main">
        <SideBar />
        <DashBoard
          tables={tables}
          createTable={createTable}
          checkedHandler={checkedHandler}
        />
      </div>
    </div>
  );
};
