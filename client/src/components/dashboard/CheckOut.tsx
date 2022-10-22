import { table } from "console";
import { FC, useEffect, useState } from "react";
import { MyRippleBtn } from "../../assets/UI/buttons/MyButtons";

interface ICheckProps {
  id: string;
  largeTable?: any[];
  isShow: boolean;
}

export const CheckOutTest: FC<ICheckProps> = ({ id, largeTable, isShow }) => {
  console.log(largeTable);
  console.log(id);

  useEffect(() => {}, [largeTable]);
  if (isShow) {
    return (
      <div className="check__out__test">
        <div className="check__out__list__item">
          {largeTable?.map((table, index) => {
            if (id === "1") {
              return <div key={index + 1}>{table.title}</div>;
            } else {
              return <h1>Aboba</h1>;
            }
          })}
        </div>
        <MyRippleBtn ripple={"#ffffff"}>Paid</MyRippleBtn>
      </div>
    );
  } else {
    return null;
  }
};
