import { FC, useState } from "react";
import { CheckOutTest } from "../components/CheckOut";
import { CreateTable } from "../components/CreateTables";
import { Tables } from "../components/tables/Tables";

export interface ILarge {
  reserved: (date: any) => void;
  tables: any[];
  tableId?: string;
  largeTable?: any[];
  large?: (object: any) => void;
  createTable: (table: any) => void;
  checkedHandler: (res: any) => void;
}

export const DashBoard: FC<ILarge> = ({
  reserved,
  createTable,
  tables,
  largeTable,
}) => {
  const [tableId, setTableId] = useState<string>("");
  const [isShow, setIsShow] = useState(false);
  const showHandler = (id: string) => {
    setTableId(id);
    setIsShow(true);
  };

  return (
    <div className="dashboard__container">
      <div className="tables__container">
        <CreateTable create={createTable} />
        <Tables tables={tables} reserved={reserved} />
      </div>
      <CheckOutTest id={tableId} largeTable={largeTable} isShow={true} />
    </div>
  );
};
