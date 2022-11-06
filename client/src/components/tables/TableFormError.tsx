import { FC } from "react";
import classes from "./TableFormError.module.css";

interface ITableFormError {
  isError: boolean;
}

export const TableFormError: FC<ITableFormError> = ({ isError }) => {
  return (
    <p
      className={classes.myTableFormError}
      style={{ visibility: isError ? "visible" : "hidden" }}
    >
      Может содержать только цифры. И иметь длинну от 0 до 2 символов.
    </p>
  );
};
