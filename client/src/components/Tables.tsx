import React from "react";
import { FC, useState } from "react";
import { MyTable } from "../assets/UI/tables/MyTable";
import { ITables } from "../types/types";

export const Tables: FC<ITables> = ({
  checkedHandler,
  tables,
  showHandler,
}) => {
  const takeTableId = (e: React.MouseEvent) => {
    const id: string = (e.target as HTMLElement).id;
    const tab: HTMLElement | null = document.getElementById(id);
    if (tab) tab.style.background = "#46abfd";
    checkedHandler(
      tables.map((table) => {
        if (table.id == id) {
          return { ...table, checked: true };
        } else {
          return table;
        }
      })
    );
    showHandler(id);
  };

  return (
    <div className="table__arrangement">
      {tables.map((table, index) => {
        if (table.tableSize === "small") {
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
              width="100px"
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
