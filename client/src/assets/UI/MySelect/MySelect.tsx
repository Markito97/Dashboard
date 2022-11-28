import React, { FC, useEffect, useState } from "react";
import classes from "./MySelect.module.css";

interface IMySelect {
  width?: string;
}

export const MySelect: FC<IMySelect> = ({ width }) => {
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

  useEffect(() => {
    const handleClick = (e: any) => {
      console.log((e.target as HTMLElement).className);
      if ((e.target as HTMLElement).className !== `${classes.selectInput}`) {
        console.log(123);
        setIsActive(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isActive]);

  const handleSelect = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={classes.selectContainer}>
      <div onClick={handleSelect} className={classes.select}>
        <div className={classes.selectInput}>{option}</div>
        <label className={classes.selectLable}>Months</label>
      </div>
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
