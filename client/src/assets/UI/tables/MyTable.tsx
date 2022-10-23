import { FC } from "react";
import { IMyTables } from "../../../types/types";
import classes from "./MyTable.module.css";

export const MyTable: FC<IMyTables> = ({ id, children, width, onClick }) => {
  return (
    <div
      id={id}
      style={{ width }}
      onClick={onClick}
      className={`${classes.myTables}`}
    >
      {children}
    </div>
  );
};
