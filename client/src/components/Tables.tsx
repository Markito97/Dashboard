import React from "react";
import { FC, useState } from "react";
import { MyTable } from "../assets/UI/tables/MyTable";
import classes from "../assets/UI/tables/MyTable.module.css";

interface ITables {
  tables: any[];
  showHandler: (id: string) => void;
  checkedHandler: (object: any) => void;
}

export const Tables: FC<ITables> = ({
  checkedHandler,
  tables,
  showHandler,
}) => {
  const takeTableId = (e: React.MouseEvent) => {
    const id = (e.target as HTMLElement).id;
    const chekedTables = tables.filter((el) => el.id == id);
    const res = (chekedTables[0].checked = true);
    checkedHandler(res);
    showHandler(id);
  };

  return (
    <div className="table__arrangement">
      {tables.map((table, index) => {
        if (table.tableSize === "small") {
          console.log(tables);
          return (
            <MyTable
              key={table.id}
              id={table.id}
              width="100px"
              onClick={takeTableId}
            >
              {index + 1}
            </MyTable>
          );
        } else if (table.tableSize === "average") {
          return (
            <MyTable
              key={table.id}
              id={table.id}
              width="250px"
              onClick={takeTableId}
            >
              {index + 1}
            </MyTable>
          );
        } else {
          return (
            <MyTable
              key={table.id}
              id={table.id}
              width="350px"
              onClick={takeTableId}
            >
              {index + 1}
            </MyTable>
          );
        }
      })}
    </div>
  );
};
