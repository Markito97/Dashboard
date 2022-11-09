import { FC, useState } from "react";
import { CheckOutTest } from "../components/CheckOut";
import { CreateTable } from "../components/CreateTables";
import { ReservedForm } from "../components/ReservedForm";
import { TableMenu } from "../components/TableMenu";
import { Tables } from "../components/tables/Tables";

export interface ILarge {
  tables: any[];
  tableId?: string;
  largeTable?: any[];
  large?: (object: any) => void;
  createTable: (table: any) => void;
  checkedHandler: (res: any) => void;
}

export const DashBoard: FC<ILarge> = ({ createTable, tables }) => {
  const [isShowTableMenu, setIsShowTableMenu] = useState(false);
  const [isShowReservedForm, setIsShowReservedForm] = useState(false);
  const [tableId, setTableId] = useState("");
  const showHandler = (show: boolean, id: string) => {
    setTableId(id);
    setIsShowTableMenu(show);
  };

  const showReservedForm = (isForm: boolean) => {
    setIsShowReservedForm(isForm);
  };

  return (
    <div className="tables__container">
      <CreateTable create={createTable} />
      <Tables tables={tables} showHandler={showHandler} />
      <ReservedForm isShowReservedForm={isShowReservedForm} />
      <TableMenu
        showReservedForm={showReservedForm}
        isShowTableMenu={isShowTableMenu}
        isShowReservedForm={isShowReservedForm}
        table={tables.filter((table) => table.id === tableId)}
      />
    </div>
  );
};
