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
      <div className={classes.myTitle}>
        <h1>Small Desk</h1>
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
      <div className={classes.myTablesBtn}>
        <MyRippleBtn padding="5px" ripple={"#ffffff"}>
          Reserved
        </MyRippleBtn>
        <MyRippleBtn padding="5px" ripple={"#ffffff"}>
          Add Order
        </MyRippleBtn>
      </div>
    </div>
  );
};
