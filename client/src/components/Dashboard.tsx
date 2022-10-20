import { Dispatch, FC, useState } from "react";
import { CheckOutTest } from "./dashboard/CheckOut";
import { Products } from "./dashboard/Products";
import { Tables } from "./Tables";
import React from "react";
import { ISales } from "../types/types";

export const DashBoard: FC<ISales> = ({ sales, setSales }) => {
  console.log(sales);
  const [id, setId] = useState("");
  const [isShow, setIsShow] = useState(false);
  const showHandler = (e: React.MouseEvent) => {
    const id = (e.target as HTMLElement).id;
    setId(id);
    setIsShow(true);
  };

  return (
    <div className="dashboard__content">
      {isShow ? <Products /> : <Tables id={id} onClick={showHandler} />}
      <CheckOutTest id={id} isShow={isShow} sales={sales} setSales={setSales} />
    </div>
  );
};
