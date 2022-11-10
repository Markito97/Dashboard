import { useState } from "react";
import { MyInput } from "../MyInput/MyInput";
import classes from "./MySelect.module.css";

export const MySelect = () => {
  const [isActive, setIsActive] = useState(false);
  const [option, setOption] = useState("");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  console.log(isActive);

  const test = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={classes.dropDown}>
      {/* <div
        className={classes.dropDownBtn}
        onClick={(e) => setIsActive(!isActive)}
      ></div> */}
      <MyInput option={option} onFocus={test}>
        Months
      </MyInput>
      {isActive && (
        <div className={classes.dropDownContent}>
          {months.map((option, index) => (
            <div
              key={index + 1}
              onClick={() => {
                setOption(option);
                setIsActive(false);
              }}
              className={classes.dropDownItem}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
