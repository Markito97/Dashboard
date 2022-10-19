import React, { useState, FC, SetStateAction, Dispatch } from "react";
import { MyRippleBtn } from "../../assets/UI/buttons/MyButtons";
import { CheckOutTest } from "./CheckOut";
import { LargeTable } from "./LargeTable";
import { Products } from "./Products";
import { SmallTable } from "./SmallTable";

interface IIsSales {
  isSale: string[];
  setIsSale: React.Dispatch<React.SetStateAction<string[]>>;
}

export const DashBoard: FC<IIsSales> = ({ isSale, setIsSale }) => {
  return (
    <div>
      <LargeTable />
      <SmallTable />
    </div>
  );
};
