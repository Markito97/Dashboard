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
    <div>
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
          <div>Date:DD/MM/YYYY</div>
          <div>Time:</div>
          <div>Who Reserved:Abobus</div>
          <div>Persons:3</div>
          <div>Telephone:8-800-555-35-35</div>
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
    </div>
  );
};
