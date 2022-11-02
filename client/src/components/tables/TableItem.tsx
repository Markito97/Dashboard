import { FC, useState } from "react";
import classes from "./Table.module.css";

interface ITableItem {
  table: any;
  tables: any[];
  reserved: (date: any) => void;
}

export const TableItem: FC<ITableItem> = ({ table, reserved, tables }) => {
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [times, setTimes] = useState({ hour: "", minute: "" });

  const setReservedData = (e: React.MouseEvent) => {
    const tId = (e.target as HTMLElement).id;
    const date = new Date();
    date.setHours(Number(times.hour));
    date.setMinutes(Number(times.minute));
    const dateString = date.toLocaleString("ru-Ru", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    if (times.hour === "" && times.minute === "") {
      console.error("Zopa");
    } else {
      reserved(
        tables.map((table) => {
          if (table.id === tId) {
            return { ...table, date: dateString };
          } else {
            return table;
          }
        })
      );
    }
  };

  return (
    <div className={classes.table__desk}>
      <div className={classes.table__name}>
        <span>{table.tableName}</span>
        <span>icon</span>
      </div>
      <ul className={classes.table__list__items}>
        <li>
          <span>Date:</span>
          <div className={classes.table__form}>
            <input
              value={times.hour}
              onChange={(e) => setTimes({ ...times, hour: e.target.value })}
              type="text"
              placeholder="hours"
              className={classes.item__hours}
            />
            <input
              value={times.minute}
              onChange={(e) => setTimes({ ...times, minute: e.target.value })}
              type="text"
              placeholder="minutes"
              className={classes.item__minutes}
            />
          </div>
          <select name="" id="" className={classes.table__select__month}>
            <option value="">Январь</option>
            <option value="">Февраль</option>
            <option value="">Март</option>
            <option value="">Апрель</option>
            <option value="">Май</option>
            <option value="">Июнь</option>
            <option value="">Июль</option>
            <option value="">Август</option>
            <option value="">Сентябрь</option>
            <option value="">Октябрь</option>
            <option value="">Ноябрь</option>
            <option value="">Декабрь</option>
          </select>
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
          onClick={setReservedData}
          className={classes.reserved__btn}
        >
          Reserved
        </button>
        <button className={classes.add__to__cart}>Add to cart</button>
      </div>
    </div>
  );
};
