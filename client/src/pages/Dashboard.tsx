import { FC, useState } from "react";
import { CheckOutTest } from "../components/CheckOut";
import { Products } from "../components/Products";
import { CreateTable } from "../components/CreateTables";
import { Tables } from "../components/Tables";

export interface ILarge {
  tables: any[];
  tableId?: string;
  largeTable?: any[];
  large: (object: any) => void;
  createTable: (table: any) => void;
}

export const DashBoard: FC<ILarge> = ({
  createTable,
  tables,
  largeTable,
  large,
}) => {
  const [tableId, setTableId] = useState<string>("");
  const [isShow, setIsShow] = useState(false);
  const showHandler = (id: string) => {
    setTableId(id);
    setIsShow(true);
  };

  return (
    <div className="dashboard__content">
      <CreateTable create={createTable} />
      {isShow ? (
        <Products large={large} tableId={tableId} />
      ) : (
        <Tables tables={tables} showHandler={showHandler} />
      )}
      <CheckOutTest id={tableId} largeTable={largeTable} isShow={isShow} />
    </div>
  );
};