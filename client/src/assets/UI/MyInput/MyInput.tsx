import { ChangeEvent, FC, useEffect } from "react";
import classes from "./MyInput.module.css";

interface IMyInput {
  id?: string;
  flag?: boolean;
  value?: string;
  inputRef?: React.RefObject<any> | undefined;
  width?: string;
  height?: string;
  children: React.ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEventInit) => void;
  onBlur?: () => void;
}

export const MyInput: FC<IMyInput> = ({
  id,
  onChange,
  children,
  onBlur,
  width,
  value,
}) => {
  const test = (e: React.FocusEvent) => {
    const id = (e.target as HTMLElement).id;
    const customIputs = Array.from(
      document.querySelectorAll(`.${classes.customInput}`)
    );
    const customLables = Array.from(
      document.querySelectorAll(`.${classes.customLables}`)
    );
    customIputs.forEach((element) => {
      if (element.id === id) {
        if ((element as HTMLInputElement).value === "") {
          element.classList.add(`${classes.aboba}`);
          // element.classList.
        } else {
          element.classList.remove(`${classes.aboba}`);
        }
      }
    });
  };

  return (
    <div className={classes.inputContainer}>
      <input
        id={id}
        value={value}
        style={{ width: width }}
        onChange={onChange}
        onBlur={test}
        className={classes.customInput}
        type="text"
        placeholder=" "
      />
      <label className={classes.cuctomLable} htmlFor="">
        {children}
      </label>
    </div>
  );
};
