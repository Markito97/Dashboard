import React, { FC, useState } from "react";
import classes from "./Table.module.css";
import { TableItem } from "./TableItem";

interface ITables {
  tables: any[];
  reserved: (date: any) => void;
}

export const Tables: FC<ITables> = ({ tables, reserved }) => {
  return (
    <div className="tables">
      <div className="table__arrangement">
        {tables.map((table, index) => (
          <TableItem
            key={index + 1}
            table={table}
            reserved={reserved}
            tables={tables}
          />
        ))}
      </div>
    </div>
  );
};
