import React from "react";
import { FC, useState } from "react";
import { MyTable } from "../assets/UI/tables/MyTable";
import { ITables } from "../types/types";

export const Tables: FC<ITables> = ({ setDate, tables }) => {
  return (
    <div className="tables">
      <div className="table__arrangement">
        {tables.map((table, index) => {
          return (
            <MyTable
              setDate={setDate}
              tables={tables}
              key={table.id}
              id={table.id}
            >
              Small Desk
            </MyTable>
          );
        })}
      </div>
    </div>
  );
};
