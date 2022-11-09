import React, { FC, useState } from "react";
import { Warn } from "../assets/icons/Warn";
import classes from "./ReservedForm.module.css";

interface IReservedForm {
  isShowReservedForm: boolean;
}

export const ReservedForm: FC<IReservedForm> = ({ isShowReservedForm }) => {
  const [reservedForm, setReservedForm] = useState({
    date: { strDate: "", isError: false },
    time: { strTime: "", isError: false },
  });

  const sendReserved = (e: React.FormEvent) => {
    e.preventDefault();
    if (reservedForm.date.strDate === "") {
      setReservedForm({
        ...reservedForm,
        date: { ...reservedForm.date, isError: true },
      });
    }
  };

  if (isShowReservedForm) {
    return (
      <form action="">
        <div className={classes.reservedForm}>
          <h1>Reserved Form</h1>
          <div className={classes.reservedFormItem}>
            <div className={classes.reservedField}>
              <label htmlFor="">Date:</label>
              <div className={classes.fieldItem}>
                <input
                  value={reservedForm.date.strDate}
                  onChange={(e) =>
                    setReservedForm({
                      ...reservedForm,
                      date: { ...reservedForm.date, strDate: e.target.value },
                    })
                  }
                  type="text"
                />
                <Warn />
              </div>
            </div>
            <div className={classes.reservedRequired}>
              <p>Это обязательное поле</p>
            </div>
          </div>
          <div className={classes.reservedFormItem}>
            <div className={classes.reservedField}>
              <label htmlFor="">Time:</label>
              <div className={classes.fieldItem}>
                <input type="text" />
                <Warn />
              </div>
            </div>
            <div className={classes.reservedRequired}>
              <p>Это обязательное поле</p>
            </div>
          </div>
          <div className={classes.reservedFormItem}>
            <div className={classes.reservedField}>
              <label htmlFor="">Who:</label>
              <div className={classes.fieldItem}>
                <input type="text" />
                <Warn />
              </div>
            </div>
            <div className={classes.reservedRequired}>
              <p>Это обязательное поле</p>
            </div>
          </div>
          <div className={classes.reservedFormItem}>
            <div className={classes.reservedField}>
              <label htmlFor="">Time:</label>
              <div className={classes.fieldItem}>
                <input type="text" />
                <Warn />
              </div>
            </div>
            <div className={classes.reservedRequired}>
              <p>Это обязательное поле</p>
            </div>
          </div>
          <div className={classes.reservedFormItem}>
            <div className={classes.reservedField}>
              <label htmlFor="">Persons:</label>
              <div className={classes.fieldItem}>
                <input type="text" />
                <Warn />
              </div>
            </div>
            <div className={classes.reservedRequired}>
              <p>Это обязательное поле</p>
            </div>
          </div>
          <div className={classes.reservedFormItem}>
            <div className={classes.reservedField}>
              <label htmlFor="">Telephone:</label>
              <div className={classes.fieldItem}>
                <input type="text" />
                <Warn />
              </div>
            </div>
            <div className={classes.reservedRequired}>
              <p>Это обязательное поле</p>
            </div>
          </div>
          {/* <button onClick={send}>reserv</button> */}
          <div className={classes.reservedFormBtn}>
            <button onClick={sendReserved}>test</button>
          </div>
        </div>
      </form>
    );
  } else {
    return null;
  }
};
