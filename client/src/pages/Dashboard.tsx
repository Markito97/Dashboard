import { FC, useState } from "react";
import { CheckOutTest } from "../components/CheckOut";
import { Products } from "../components/Products";
import { CreateTable } from "../components/CreateTables";
import { Tables } from "../components/Tables";

export interface ILarge {
  setDate: (date: any) => void;
  tables: any[];
  tableId?: string;
  largeTable?: any[];
  large?: (object: any) => void;
  createTable: (table: any) => void;
  checkedHandler: (res: any) => void;
}

export const DashBoard: FC<ILarge> = ({
  setDate,
  checkedHandler,
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
    <div className="dashboard__container">
      <div className="tables__container">
        <CreateTable create={createTable} />
        <Tables
          setDate={setDate}
          checkedHandler={checkedHandler}
          tables={tables}
          showHandler={showHandler}
        />
      </div>
      <CheckOutTest id={tableId} largeTable={largeTable} isShow={true} />
    </div>
  );
};
