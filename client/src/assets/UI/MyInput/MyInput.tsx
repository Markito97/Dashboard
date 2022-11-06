import { ChangeEvent, FC } from "react";
import classes from "./MyInput.module.css";

interface IMyInput {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const MyInput: FC<IMyInput> = ({ onChange }) => {
  return <input onChange={onChange} className={classes.myInput} />;
};
