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
      <div className="check__out">
        <div className="check__out__list__item">
          <div className="check__out__item">
            <div className="item__id">1.</div>
            <div className="item__title">Title</div>
            <div className="item__descriptino">Description</div>
            <div className="item__amount">5</div>
            <div className="item__price">100</div>
          </div>
        </div>
        <div>
          <MyRippleBtn ripple={"#ffffff"}>Add to Cart</MyRippleBtn>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
