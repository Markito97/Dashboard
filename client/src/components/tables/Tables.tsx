import React, { FC, useState } from "react";
import classes from "./Table.module.css";
import { Table } from "./Table";

interface ITables {
  tables: any[];
  reserved: (date: any) => void;
}

export const Tables: FC<ITables> = ({ tables, reserved }) => {
  return (
    <div className="tables">
      <div className="table__arrangement">
        {tables.map((table) => {
          if (table.tableSize === "small") {
            return (
              <div
                id={table.id}
                className={`${classes.smallTable} ${classes.table}`}
              >
                small
              </div>
            );
          }
          if (table.tableSize === "large") {
            return (
              <div
                id={table.id}
                className={`${classes.largeTable} ${classes.table}`}
              >
                large
              </div>
            );
          }
          if (table.tableSize === "average") {
            return (
              <div
                id={table.id}
                className={`${classes.averageTable} ${classes.table}`}
              >
                average
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
