import { ChangeEvent, FC, useEffect } from "react";
import classes from "./MyInput.module.css";

interface IMyInput {
  option?: string;
  children: React.ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEventInit) => void;
}

export const MyInput: FC<IMyInput> = ({
  onChange,
  children,
  onFocus,
  option,
}) => {
  return (
    <div className={classes.inputContainer}>
      <input
        value={option}
        onChange={onChange}
        onFocus={onFocus}
        className={classes.customInput}
        type="text"
        placeholder=" "
      />
      <label htmlFor="">{children}</label>
    </div>
  );
};
