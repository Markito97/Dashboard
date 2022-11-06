import * as React from "react";
import "./styles/App.css";
import "./styles/reset.css";
import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SIdeBar";
import { DashBoard } from "./pages/Dashboard";
import { useState } from "react";

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
      tableSize: "average",
      date: null,
      whoReserved: null,
      persons: null,
      telephone: null,
    },
    {
      id: "3",
      checked: false,
      tableName: "Small Desk",
      tableSize: "large",
      date: null,
      whoReserved: null,
      persons: null,
      telephone: null,
    },
    {
      id: "4",
      checked: false,
      tableName: "Small Desk",
      tableSize: "large",
      date: null,
      whoReserved: null,
      persons: null,
      telephone: null,
    },
    {
      id: "4",
      checked: false,
      tableName: "Small Desk",
      tableSize: "large",
      date: null,
      whoReserved: null,
      persons: null,
      telephone: null,
    },
    {
      id: "2",
      checked: false,
      tableName: "Small Desk",
      tableSize: "average",
      date: null,
      whoReserved: null,
      persons: null,
      telephone: null,
    },
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
      id: "3",
      checked: false,
      tableName: "Small Desk",
      tableSize: "large",
      date: null,
      whoReserved: null,
      persons: null,
      telephone: null,
    },
    {
      id: "3",
      checked: false,
      tableName: "Small Desk",
      tableSize: "large",
      date: null,
      whoReserved: null,
      persons: null,
      telephone: null,
    },
    {
      id: "3",
      checked: false,
      tableName: "Small Desk",
      tableSize: "large",
      date: null,
      whoReserved: null,
      persons: null,
      telephone: null,
    },
  ]);

  const reserved = (date: object[]) => {
    setTables(date);
  };

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
