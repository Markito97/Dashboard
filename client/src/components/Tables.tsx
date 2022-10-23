import React from "react";
import { FC, useState } from "react";
import { MyTable } from "../assets/UI/tables/MyTable";

interface ITables {
  tables: any[];
  showHandler: (id: string) => void;
}

export const Tables: FC<ITables> = ({ tables, showHandler }) => {
  const takeTableId = (e: React.MouseEvent) => {
    const id = (e.target as HTMLElement).id;
    showHandler(id);
  };

  return (
    <div className="table__arrangement">
      {tables.map((table, index) => {
        if (table.tableSize === "Small_Table") {
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
        } else if (table.tableSize === "Average_Table") {
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
