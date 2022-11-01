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
import { tab } from "@testing-library/user-event/dist/tab";

export const App = () => {
  const [tables, setTables] = useState<any[]>([
    {
      id: "1",
      tableName: "Small Desk",
      checked: false,
      tableSize: "small",
      date: null,
      whoReserved: null,
      persons: null,
      telephone: null,
    },
    {
      id: "2",
      checked: false,
      tableName: "Small Desk",
      tableSize: "small",
      date: null,
      whoReserved: null,
      persons: null,
      telephone: null,
    },
    {
      id: "3",
      checked: false,
      tableName: "Small Desk",
      tableSize: "small",
      date: null,
      whoReserved: null,
      persons: null,
      telephone: null,
    },
  ]);
  const [largeTable, setLargeTable] = useState<any[]>([]);
  const [test, setTest] = useState<string>();

  // const changeLargeTable = (object: any) => {
  //   setLargeTable([...largeTable, object]);
  // };

  const reserved = (date: object[]) => {
    setTables(date);
  };

  //работает
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
          reserved={reserved}
          tables={tables}
          createTable={createTable}
          checkedHandler={checkedHandler}
        />
      </div>
    </div>
  );
};
