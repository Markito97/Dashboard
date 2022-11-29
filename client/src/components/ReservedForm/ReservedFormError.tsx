import { FC } from "react";
import classes from "./ReservedFormError.module.css";
interface IReservedFormError {
  children: React.ReactNode;
}

export const ReservedFormError: FC<IReservedFormError> = ({ children }) => {
  return <p className={classes.reservedFormError}>{children}</p>;
};
