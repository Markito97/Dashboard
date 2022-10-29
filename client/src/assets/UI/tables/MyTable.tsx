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
  return (
    <div
      id={id}
      style={{ width, background }}
      onClick={onClick}
      className={`${classes.myTables}`}
    >
      <div className={classes.remove__table}>
        <div>Small Desk</div>
        <RemoveSvg />
      </div>
      <ul>
        <li>
          <span>Date:</span>
          <span>DD/MM/YYYY</span>
        </li>
        <li>
          <span>Time:</span>
          <span>Time</span>
        </li>
        <li>
          <span>Who Reserved:</span>
          <span>Abobus</span>
        </li>
        <li>
          <span>Persons:</span>
          <span>3</span>
        </li>
        <li>
          <span>Telephone:</span>
          <span>8-800-555-35-35</span>
        </li>
      </ul>
      <MyRippleBtn ripple={"#ffffff"}>Reserved</MyRippleBtn>
      <MyRippleBtn ripple={"#ffffff"}>Add Order</MyRippleBtn>
    </div>
  );
};
