import React, { FC, useState } from "react";
import classes from "./Table.module.css";

interface ITables {
  tables: any[];
  reserved: (date: any) => void;
}

export const Tables: FC<ITables> = ({ tables, reserved }) => {
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");

  const setReservedData = (e: React.MouseEvent) => {
    console.log((e.target as HTMLElement).id);
    const date = new Date();
    date.setHours(Number(hour));
    date.setMinutes(Number(minute));
    const dateString = date.toLocaleString("ru-Ru", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    reserved(
      tables.map((table) => {
        return { ...table, date: dateString };
      })
    );
  };

  return (
    <div className="tables">
      <div className="table__arrangement">
        {tables.map((table, index) => (
          <div key={index + 1} className={classes.table__desk}>
            <div className={classes.table__name}>
              <span>{table.tableName}</span>
              <span>icon</span>
            </div>
            <ul className={classes.table__list__items}>
              <li>
                <span>Date:</span>
                <div className={classes.table__form}>
                  <input
                    value={hour}
                    onChange={(e) => setHour(e.target.value)}
                    type="text"
                    placeholder="hours"
                    className={classes.item__hours}
                  />
                  <input
                    value={minute}
                    onChange={(e) => setMinute(e.target.value)}
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
                <span>{table.whoReserved}</span>
              </li>
              <li>
                <span>Persons:</span>
                <span>{table.persons}</span>
              </li>
              <li>
                <span>Telephone:</span>
                <span>{table.telephone}</span>
              </li>
            </ul>
            <div className={classes.table__btn}>
              <button
                onClick={setReservedData}
                id={table.id}
                className={classes.reserved__btn}
              >
                Reserved
              </button>
              <button id={table.id} className={classes.add__to__cart}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
function setDate(arg0: any[]) {
  throw new Error("Function not implemented.");
}
