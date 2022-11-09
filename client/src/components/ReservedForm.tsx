import React, { FC, useState } from "react";
import { Warn } from "../assets/icons/Warn";
import classes from "./ReservedForm.module.css";

interface IReservedForm {
  isShowReservedForm: boolean;
}

export const ReservedForm: FC<IReservedForm> = ({ isShowReservedForm }) => {
  const [reservedForm, setReservedForm] = useState({
    date: { value: "", isError: false },
    time: { value: "", isError: false },
    who: { value: "", isError: false },
    persons: { value: "", isError: false },
    telephone: { value: "", isError: false },
  });

  const sendReserved = (e: React.FormEvent) => {
    e.preventDefault();
    // const arrOfInputsValues = Object.entries(reservedForm);
    for (const [key, value] of Object.entries(reservedForm)) {
      console.log(key);
      console.log(value.isError);
    }
    // const mappedInputs = arrOfInputsValues.map((obj) => {
    //   if (obj.value === "") {
    //     return { ...obj, isError: true };
    //   } else {
    //     return obj;
    //   }
    // });
    // console.log(...mappedInputs);

    // хз как изменить стейт
  };

  // const sendReserved = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (reservedForm.date.strDate === "") {
  //     setReservedForm({
  //       ...reservedForm,
  //       date: { ...reservedForm.date, isError: true },
  //     });
  //   } else {
  //     setReservedForm({
  //       ...reservedForm,
  //       date: { ...reservedForm.date, isError: false },
  //     });
  //   }
  // };

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
                  value={reservedForm.date.value}
                  onChange={(e) =>
                    setReservedForm({
                      ...reservedForm,
                      date: { ...reservedForm.date, value: e.target.value },
                    })
                  }
                  type="text"
                />
                <Warn />
              </div>
            </div>
            <div className={classes.reservedRequired}>
              <p
                style={{
                  visibility: reservedForm.date.isError ? "visible" : "hidden",
                }}
              >
                Это обязательное поле
              </p>
            </div>
          </div>

          <div className={classes.reservedFormItem}>
            <div className={classes.reservedField}>
              <label htmlFor="">Time:</label>
              <div className={classes.fieldItem}>
                <input
                  value={reservedForm.time.value}
                  onChange={(e) =>
                    setReservedForm({
                      ...reservedForm,
                      time: { ...reservedForm.time, value: e.target.value },
                    })
                  }
                  type="text"
                />
                <Warn />
              </div>
            </div>
            <div className={classes.reservedRequired}>
              <p
                style={{
                  visibility: reservedForm.time.isError ? "visible" : "hidden",
                }}
              >
                Это обязательное поле
              </p>
            </div>
          </div>
          <div className={classes.reservedFormItem}>
            <div className={classes.reservedField}>
              <label htmlFor="">Who:</label>
              <div className={classes.fieldItem}>
                <input
                  value={reservedForm.who.value}
                  onChange={(e) =>
                    setReservedForm({
                      ...reservedForm,
                      who: { ...reservedForm.who, value: e.target.value },
                    })
                  }
                  type="text"
                />
                <Warn />
              </div>
            </div>
            <div className={classes.reservedRequired}>
              <p
                style={{
                  visibility: reservedForm.who.isError ? "visible" : "hidden",
                }}
              >
                Это обязательное поле
              </p>
            </div>
          </div>
          <div className={classes.reservedFormItem}>
            <div className={classes.reservedField}>
              <label htmlFor="">Persons:</label>
              <div className={classes.fieldItem}>
                <input
                  value={reservedForm.persons.value}
                  onChange={(e) =>
                    setReservedForm({
                      ...reservedForm,
                      persons: {
                        ...reservedForm.persons,
                        value: e.target.value,
                      },
                    })
                  }
                  type="text"
                />
                <Warn />
              </div>
            </div>
            <div className={classes.reservedRequired}>
              <p
                style={{
                  visibility: reservedForm.persons.isError
                    ? "visible"
                    : "hidden",
                }}
              >
                Это обязательное поле
              </p>
            </div>
          </div>
          <div className={classes.reservedFormItem}>
            <div className={classes.reservedField}>
              <label htmlFor="">Telephone:</label>
              <div className={classes.fieldItem}>
                <input
                  value={reservedForm.telephone.value}
                  onChange={(e) =>
                    setReservedForm({
                      ...reservedForm,
                      telephone: {
                        ...reservedForm.telephone,
                        value: e.target.value,
                      },
                    })
                  }
                  type="text"
                />
                <Warn />
              </div>
            </div>
            <div className={classes.reservedRequired}>
              <p
                style={{
                  visibility: reservedForm.telephone.isError
                    ? "visible"
                    : "hidden",
                }}
              >
                Это обязательное поле
              </p>
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
