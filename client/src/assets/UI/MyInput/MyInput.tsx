import { ChangeEvent, FC, useEffect } from "react";
import classes from "./MyInput.module.css";

interface IMyInput {
  width?: string;
  height?: string;
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
  width,
  height,
}) => {
  return (
    <div className={classes.inputContainer}>
      <input
        style={{ width: width }}
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
