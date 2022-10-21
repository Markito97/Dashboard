import { Dispatch, FC, useState } from "react";
import { CheckOutTest } from "./dashboard/CheckOut";
import { Products } from "./dashboard/Products";
import { Tables } from "./Tables";
import React from "react";
import { ISales } from "../types/types";
import { MyRippleBtn } from "../assets/UI/buttons/MyButtons";

interface IChangeProps {
  isChangeState: (value: string) => void;
}

export const DashBoard: FC<IChangeProps> = ({ isChangeState }) => {
  console.log(isChangeState);
  const [id, setId] = useState("1");
  const [isShow, setIsShow] = useState(false);
  const showHandler = (e: React.MouseEvent) => {
    const id = (e.target as HTMLElement).id;
    setId(id);
    setIsShow(true);
  };

  const str = "123";

  const test = () => {
    console.log(isChangeState(id));
  };
  return (
    <div className="dashboard__content">
      {isShow ? <Products /> : <Tables id={id} onClick={showHandler} />}
      <CheckOutTest id={id} isShow={isShow} />
    </div>
  );
};
