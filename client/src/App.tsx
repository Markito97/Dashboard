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
  const [tables, setTables] = useState<any[]>([]);
  const [largeTable, setLargeTable] = useState<any[]>([]);
  const [test, setTest] = useState<string>();

  // const changeLargeTable = (object: any) => {
  //   setLargeTable([...largeTable, object]);
  // };

  const setDate = (date: any) => {
    setTables(
      tables.map((table) => {
        return { ...table, date: date };
      })
    );
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
          setDate={setDate}
          tables={tables}
          createTable={createTable}
          checkedHandler={checkedHandler}
        />
      </div>
    </div>
  );
};
