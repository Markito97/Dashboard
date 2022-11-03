import React from "react";
import { FC, useState, useRef, createRef } from "react";
import classes from "./Table.module.css";
import { TableForm } from "./TableForm";

interface ITableItem {
  table: any;
  tables: any[];
  reserved: (date: any) => void;
}

export const Table: FC<ITableItem> = ({ table, reserved, tables }) => {
  const [times, setTimes] = useState<any>();
  const dataHandler = (time: string) => {
    setTimes(time);
  };
  const ref: React.RefObject<any> = React.createRef();

  //   const setReservedData = (e: React.MouseEvent) => {
  //     const tId = (e.target as HTMLElement).id;
  //     const date = new Date();
  //     date.setHours(Number());
  //     date.setMinutes(Number());
  //     const dateString = date.toLocaleString("ru-Ru", {
  //       year: "numeric",
  //       month: "numeric",
  //       day: "numeric",
  //       hour: "numeric",
  //       minute: "numeric",
  //       second: "numeric",
  //     });
  //     // if (times.hour === "" && times.minute === "") {
  //     //   console.error("Zopa");
  //     // } else {
  //     //   reserved(
  //     //     tables.map((table) => {
  //     //       if (table.id === tId) {
  //     //         return { ...table, date: dateString };
  //     //       } else {
  //     //         return table;
  //     //       }
  //     //     })
  //     //   );
  //     // }
  //   };

  return (
    <div className={classes.table__desk}>
      <div className={classes.table__name}>
        <span>{table.tableName}</span>
        <span>icon</span>
      </div>
      <ul className={classes.table__list__items}>
        <li>
          <div>
            <span>Reserve for:</span>
            <TableForm ref={ref} />
          </div>
        </li>
        <li>
          <span>Time:</span>
          <span>{table.date}</span>
        </li>
        <li>
          <span>Who reserved:</span>
          <span></span>
        </li>
        <li>
          <span>Persons:</span>
          <span></span>
        </li>
        <li>
          <span>Telephone:</span>
          <span></span>
        </li>
      </ul>
      <div className={classes.table__btn}>
        <button
          id={table.id}
          onClick={() => ref.current.test()}
          className={classes.reserved__btn}
        >
          Reserved
        </button>
        <button className={classes.add__to__cart}>Add to cart</button>
      </div>
    </div>
  );
};
