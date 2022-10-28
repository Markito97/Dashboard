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
      <div className={classes.table__content}>
        <div className={classes.flex__content}>
          <span>Date:</span>
          <span>DD/MM/YYYY</span>
        </div>
        <div className={classes.flex__content}>
          <span>Time:</span>
          <span>Time</span>
        </div>
        <div className={classes.flex__content}>
          <span>Who Reserved:</span>
          <span>Abobus</span>
        </div>
        <div className={classes.flex__content}>
          <span>Persons:</span>
          <span>3</span>
        </div>
        <div className={classes.flex__content}>
          <span>Telephone:</span>
          <span>
            <strong>8-800-555-35-35</strong>
          </span>
        </div>
      </div>
      <div className={classes.reserved}>
        <MyRippleBtn margin="8px 8px 8px 0px" padding="5px" ripple={"#ffffff"}>
          Reserved
        </MyRippleBtn>
        <MyRippleBtn margin="8px 0px 8px 8px" padding="5px" ripple={"#ffffff"}>
          Add Order
        </MyRippleBtn>
      </div>
    </div>
  );
};
