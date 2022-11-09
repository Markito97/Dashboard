import React, { FC, useState } from "react";
import classes from "./Table.module.css";

interface ITables {
  tables: any[];
  showHandler: (show: boolean, id: string) => void;
}

export const Tables: FC<ITables> = ({ tables, showHandler }) => {
  return (
    <div className="tables">
      <div className="table__arrangement">
        {tables.map((table) => {
          if (table.tableSize === "small") {
            return (
              <div
                key={table.id}
                onClick={() => showHandler(true, table.id)}
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
                key={table.id}
                onClick={() => showHandler(true, table.id)}
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
                key={table.id}
                onClick={() => showHandler(true, table.id)}
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
