import { FC } from "react";
import { IMyTables } from "../../../types/types";
import { MyRippleBtn } from "../buttons/MyButtons";
import { RemoveSvg } from "../icons/MyIcons";
import classes from "./MyTable.module.css";

export const MyTable: FC<IMyTables> = ({
  id,
  background,
  children,
  width,
  onClick,
}) => {
  console.log(background);
  return (
    <div
      id={id}
      style={{ width, background }}
      onClick={onClick}
      className={`${classes.myTables}`}
    >
      <div className={classes.remove__table}>
        <div>{children}</div>
        <RemoveSvg />
      </div>
      <div className={classes.table__content}>
        <div>Date:</div>
        <div>Time:</div>
        <div>Who Reserved:</div>
        <div>Persons:</div>
        <div>Telephone:</div>
      </div>
      <div className={classes.reserved}>
        <MyRippleBtn padding="8px" ripple={"#ffffff"}>
          Reserved
        </MyRippleBtn>
        <MyRippleBtn padding="8px" ripple={"#ffffff"}>
          Add Order
        </MyRippleBtn>
      </div>
    </div>
  );
};
