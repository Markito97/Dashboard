import { table } from "console";
import React, { FC, useEffect, useState } from "react";
import { IMyTables } from "../../../types/types";
import { MyRippleBtn } from "../buttons/MyButtons";
import { RemoveSvg } from "../icons/MyIcons";
import { MyInput } from "../inputs/MyInput";
import { MySelect } from "../select/MySelect";
import classes from "./MyTable.module.css";

export const MyTable: FC<IMyTables> = ({
  date,
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
  const [flag, setFlag] = useState(false);

  const handlerDate = (e: React.MouseEvent) => {
    const btnId = takeTableId(e);
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
    setDate(
      tables.map((table) => {
        if (table.id === id) {
          setFlag(true);
          return { ...table, date: dateString, checked: !table.checked };
        } else {
          return table;
        }
      })
    );
  };

  const takeTableId = (e: React.MouseEvent) => {
    const id = (e.target as HTMLElement).id;
    return id;
  };

  useEffect(() => {
    // setInterval(() => {
    //   console.log(tables);
    // }, 1000);
    // console.log("Effect");
    // const checkDate = setInterval(() => {
    //   const now = new Date();
    //   const today = now.toLocaleString("ru-Ru", {
    //     year: "numeric",
    //     month: "numeric",
    //     day: "numeric",
    //     hour: "numeric",
    //     minute: "numeric",
    //     second: "numeric",
    //   });
    //   // console.log(tables);
    //   // tables.forEach((el) => {
    //   //   // if (el.date !== undefined) {
    //   //   //   if (Date.parse(today) > new Date(el.date).getTime()) {
    //   //   //     console.log(123);
    //   //   //     clearInterval(checkDate);
    //   //   //   }
    //   //   // }
    //   //   console.log(Date.parse(today) > new Date(el.date).getTime());
    //   // });
    // }, 2000);
  }, [tables]);

  return (
    <div
      id={id}
      style={{ width, background }}
      onClick={onClick}
      className={flag ? `${classes.myTablesReserved}` : `${classes.myTables}`}
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
          <span>{date}</span>
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
          id={id}
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
