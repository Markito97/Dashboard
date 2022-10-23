import { table } from "console";
import { FC, useEffect, useState } from "react";
import { MyRippleBtn } from "../assets/UI/buttons/MyButtons";

interface ICheckProps {
  id: string;
  largeTable?: any[];
  isShow: boolean;
}

export const CheckOutTest: FC<ICheckProps> = ({ id, largeTable, isShow }) => {
  if (isShow) {
    return (
      <div className="check__out__test">
        <div className="check__out__list__item"></div>
        <MyRippleBtn padding="15px" margin="25px" ripple={"#ffffff"}>
          Paid
        </MyRippleBtn>
      </div>
    );
  } else {
    return null;
  }
};
