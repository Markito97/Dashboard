import { FC, useState } from "react";
import { CheckOutTest } from "./CheckOut";

interface ITable {
  id: string;
  checked: boolean;
  tableName: string;
  tableSize: string;
  date: null;
  whoReserved: null;
  persons: null;
  telephone: null;
}
interface ITableMenu {
  table: ITable[];
  isShowTableMenu: boolean;
  isShowReservedForm: boolean;
  showReservedForm: (isForm: boolean) => void;
}

export const TableMenu: FC<ITableMenu> = ({
  isShowTableMenu,
  table,
  isShowReservedForm,
  showReservedForm,
}) => {
  if (isShowTableMenu) {
    return (
      <div className="table__menu">
        {table.map((tableInfo) => (
          <div key={tableInfo.id}>
            <ul>
              <li>{tableInfo.id}</li>
              <li>{tableInfo.tableName}</li>
              <li>{tableInfo.date}</li>
              <li>{tableInfo.whoReserved}</li>
              <li>{tableInfo.persons}</li>
              <li>{tableInfo.telephone}</li>
            </ul>
          </div>
        ))}
        <div>
          <button onClick={() => showReservedForm(!isShowReservedForm)}>
            reserved
          </button>
          <button>active</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
