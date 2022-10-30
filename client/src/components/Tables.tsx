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

    checkedHandler(
      tables.map((table) => {
        if (table.id == id) {
          return { ...table, checked: !table.checked };
        } else {
          return table;
        }
      })
    );
    showHandler(id);
  };

  return (
    <div className="tables">
      <div className="table__arrangement">
        {/* {tables.map((table, index) => {
        if (table.tableSize === "small") {
          return (
            <MyTable key={table.id} id={table.id} onClick={takeTableId}>
              Small Desk
            </MyTable>
          );
        } else if (table.tableSize === "average") {
          return (
            <MyTable key={table.id} id={table.id} onClick={takeTableId}>
              {index + 1}
            </MyTable>
          );
        }
      })} */}
        <MyTable children={undefined} />
        <MyTable children={undefined} />
        <MyTable children={undefined} />
        <MyTable children={undefined} />
        <MyTable children={undefined} />
        <MyTable children={undefined} />
        <MyTable children={undefined} />
        <MyTable children={undefined} />
        <MyTable children={undefined} />
        <MyTable children={undefined} />
        <MyTable children={undefined} />
        <MyTable children={undefined} />
      </div>
    </div>
  );
};
