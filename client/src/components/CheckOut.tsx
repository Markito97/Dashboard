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
      <div className="checkout__menu">
        <ul className="checkout__menu__item">
          <li className="checkout__list__item">
            <span>1.</span>
            <span>Title</span>
            <span>Description</span>
            <span>5</span>
            <span>100</span>
          </li>
          <li className="checkout__list__item">
            <span>1.</span>
            <span>Title</span>
            <span>Description</span>
            <span>5</span>
            <span>100</span>
          </li>
          <li className="checkout__list__item">
            <span>1.</span>
            <span>Title</span>
            <span>Description</span>
            <span>5</span>
            <span>100</span>
          </li>
        </ul>

        <div>
          <MyRippleBtn ripple={"#ffffff"}>Add to Cart</MyRippleBtn>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
