import { table } from "console";
import { FC, useEffect, useState } from "react";

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
            <span></span>
          </li>
          <li className="checkout__list__item">
            <span>2.</span>
            <span>Title</span>
            <span>Description</span>
            <span>5</span>
            <span>100</span>
            <span></span>
          </li>
          <li className="checkout__list__item">
            <span>3.</span>
            <span>Title</span>
            <span>Description</span>
            <span>5</span>
            <span>100</span>
            <span></span>
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};
