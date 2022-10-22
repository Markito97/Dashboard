import { FC, useState } from "react";
import { ILarge } from "../types/types";
// import { CheckOutTest } from "../components/CheckOut";
// import { Products } from "../components/Products";
// import { Tables } from "../components/Tables";
import { CreateTable } from "../components/CreateTables";

export const DashBoard: FC<ILarge> = ({ largeTable, large }) => {
  const [tableId, setTableId] = useState<string>("");
  const [isShow, setIsShow] = useState(false);
  const showHandler = (id: string) => {
    setTableId(id);
    setIsShow(true);
  };

  console.log(tableId);

  return (
    <div className="dashboard__content">
      <CreateTable />
      {/* {isShow ? (
        <Products large={large} tableId={tableId} />
      ) : (
        <Tables showHandler={showHandler} />
      )}
      <CheckOutTest id={tableId} largeTable={largeTable} isShow={isShow} /> */}
    </div>
  );
};
