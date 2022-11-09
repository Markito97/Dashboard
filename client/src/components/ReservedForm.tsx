import { FC } from "react";
import { Warn } from "../assets/icons/Warn";
import classes from "./ReservedForm.module.css";

interface IReservedForm {
  isShowReservedForm: boolean;
}

export const ReservedForm: FC<IReservedForm> = ({ isShowReservedForm }) => {
  const test = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(123);
  };

  if (isShowReservedForm) {
    return (
      <form action="">
        <div className={classes.reservedForm}>
          <h1>Reserved Form</h1>
          <div className={classes.reservedFormItem}>
            <div className={classes.reservedField}>
              <label htmlFor="">Date:</label>
              <input type="text" />
              <Warn />
            </div>
            <div className={classes.reservedRequired}>
              <p>Это обязательное поле</p>
            </div>
          </div>
          <div className={classes.reservedFormItem}>
            <div className={classes.reservedField}>
              <label htmlFor="">Time:</label>
              <input type="text" />
              <Warn />
            </div>
            <div className={classes.reservedRequired}>
              <p>Это обязательное поле</p>
            </div>
          </div>
          <div className={classes.reservedFormItem}>
            <div className={classes.reservedField}>
              <label htmlFor="">Who:</label>
              <input type="text" />
              <Warn />
            </div>
            <div className={classes.reservedRequired}>
              <p>Это обязательное поле</p>
            </div>
          </div>
          <div className={classes.reservedFormItem}>
            <div className={classes.reservedField}>
              <label htmlFor="">Time:</label>
              <input type="text" />
              <Warn />
            </div>
            <div className={classes.reservedRequired}>
              <p>Это обязательное поле</p>
            </div>
          </div>
          <div className={classes.reservedFormItem}>
            <div className={classes.reservedField}>
              <label htmlFor="">Persons:</label>
              <input type="text" />
              <Warn />
            </div>
            <div className={classes.reservedRequired}>
              <p>Это обязательное поле</p>
            </div>
          </div>
          <div className={classes.reservedFormItem}>
            <div className={classes.reservedField}>
              <label htmlFor="">Telephone:</label>
              <input type="text" />
              <Warn />
            </div>
            <div className={classes.reservedRequired}>
              <p>Это обязательное поле</p>
            </div>
          </div>
          {/* <button onClick={send}>reserv</button> */}
          <div className={classes.reservedFormBtn}>
            <button onClick={test}>test</button>
          </div>
        </div>
      </form>
    );
  } else {
    return null;
  }
};
