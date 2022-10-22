import { FC, useState } from "react";
import { ILarge } from "../types/types";
import { CheckOutTest } from "./dashboard/CheckOut";
import { Products } from "./dashboard/Products";
import { Tables } from "./Tables";

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
      {isShow ? (
        <Products large={large} />
      ) : (
        <Tables showHandler={showHandler} />
      )}
      <CheckOutTest id={tableId} largeTable={largeTable} isShow={isShow} />
    </div>
  );
};
