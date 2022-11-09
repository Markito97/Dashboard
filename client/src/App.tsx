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
      tableName: "Average Desk",
      tableSize: "average",
      date: null,
      whoReserved: null,
      persons: null,
      telephone: null,
    },
    {
      id: "3",
      checked: false,
      tableName: "Large Desk",
      tableSize: "large",
      date: null,
      whoReserved: null,
      persons: null,
      telephone: null,
    },
  ]);

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
