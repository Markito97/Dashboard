import { FC } from "react";
import { IMyTables } from "../../../types/types";
import classes from "./MyTable.module.css";

export const MyTable: FC<IMyTables> = ({
  id,
  background,
  children,
  width,
  onClick,
}) => {
  console.log(background);
  return (
    <div
      id={id}
      style={{ width, background }}
      onClick={onClick}
      className={`${classes.myTables}`}
    >
      {children}
    </div>
  );
};
