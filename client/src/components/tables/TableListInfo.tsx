import { FC } from "react";
import classes from "./TableListInfo.module.css";

interface ITableListInfo {
  table: any;
}

export const TableListInfo: FC<ITableListInfo> = ({ table }) => {
  return (
    <ul className={classes.table__list__info}>
      <li>
        <span>Time</span>
        <span>{table.date}</span>
      </li>
      <li>
        <span>Who reserved</span>
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
  );
};
