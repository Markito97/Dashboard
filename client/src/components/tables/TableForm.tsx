import { FC, useState } from "react";
import classes from "./Tables.module.css";

interface ITableForm {
  dataHandler: (time: string) => void;
}

export const TableForm: FC<ITableForm> = ({ dataHandler }) => {
  return (
    <div>
      <input
        onChange={(e) => dataHandler(e.target.value)}
        type="text"
        placeholder="hours"
      />
    </div>
  );
};
