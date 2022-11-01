import { table } from "console";
import { FC, useEffect, useState } from "react";
import { IMyTables } from "../../../types/types";
import { MyRippleBtn } from "../buttons/MyButtons";
import { RemoveSvg } from "../icons/MyIcons";
import { MyInput } from "../inputs/MyInput";
import { MySelect } from "../select/MySelect";
import classes from "./MyTable.module.css";

export const MyTable: FC<IMyTables> = ({
  setDate,
  tables,
  id,
  background,
  children,
  width,
  onClick,
}) => {
  const [hours, setHour] = useState("");
  const [minutes, setMinute] = useState("");

  const handlerDate = () => {
    const date = new Date();
    date.setHours(Number(hours));
    date.setMinutes(Number(minutes));
    const dateString = date.toLocaleString("ru-Ru", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    setDate(dateString);
  };

  useEffect(() => {
    const checkDate = setInterval(() => {
      const now = new Date();
      const today = now.toLocaleString("ru-Ru", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
      tables.forEach((el) => {
        if (el.date !== undefined) {
          if (Date.parse(today) > new Date(el.date).getTime()) {
            console.log(123);
            clearInterval(checkDate);
          }
        }
      });
    }, 2000);
  });

  return (
    <div
      id={id}
      style={{ width, background }}
      onClick={onClick}
      className={`${classes.myTables}`}
    >
      <div className={classes.myTitle}>
        <h1>Small Desk</h1>
        <RemoveSvg />
      </div>
      <ul>
        <li>
          <span>Date:</span>
          <input
            value={hours}
            onChange={(e) => setHour(e.target.value)}
            type="text"
            placeholder="hours"
          />
          <input
            value={minutes}
            onChange={(e) => setMinute(e.target.value)}
            type="text"
            placeholder="minute"
          />
          <MySelect />
        </li>
        <li>
          <span>Time:</span>
          <span>Time</span>
        </li>
        <li>
          <span>Who Reserved:</span>
          <span>Abobus</span>
        </li>
        <li>
          <span>Persons:</span>
          <span>3</span>
        </li>
        <li>
          <span>Telephone:</span>
          <span>8-800-555-35-35</span>
        </li>
      </ul>
      <div className={classes.myTablesBtn}>
        <MyRippleBtn
          onCLick={handlerDate}
          padding="5px"
          marginTop="5px"
          ripple={"#ffffff"}
        >
          Reserved
        </MyRippleBtn>
        <MyRippleBtn padding="5px" marginTop="5px" ripple={"#ffffff"}>
          Add Order
        </MyRippleBtn>
      </div>
    </div>
  );
};
