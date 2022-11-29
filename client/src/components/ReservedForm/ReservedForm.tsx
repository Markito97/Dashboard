import React, { FC, useRef, useState } from "react";
import { MutableRefObject } from "react";
import { MyInput } from "../../assets/UI/MyInput/MyInput";
import { MySelect } from "../../assets/UI/MySelect/MySelect";
import classes from "./ReservedForm.module.css";
import { ReservedFormError } from "./ReservedFormError";
import { v4 as uuidv4 } from "uuid";

interface IReservedForm {
  isShowReservedForm: boolean;
}

export const ReservedForm: FC<IReservedForm> = ({ isShowReservedForm }) => {
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [flag, setFlag] = useState(false);

  const emptyValidator = () => {
    if (day === "") {
      setFlag(true);
    } else {
      setFlag(false);
    }
  };

  if (isShowReservedForm) {
    return (
      <div className={classes.reservedForm}>
        <h1 className={classes.reservedFormTitle}>Reserved Form</h1>
        <div className={classes.reservedFormDate}>
          <MyInput
            id={uuidv4()}
            onBlur={emptyValidator}
            value={day}
            onChange={(e) => setDay(e.target.value)}
            width="60px"
          >
            Day
          </MyInput>
          <MySelect />
          <MyInput
            id={uuidv4()}
            value={year}
            onChange={(e) => setYear(e.target.value)}
            width="70px"
          >
            Year
          </MyInput>
        </div>
        <ReservedFormError>
          Укажите дату бронирования полностью
        </ReservedFormError>
        <div className={classes.reservedFormItem}>
          <MyInput width="190px">Who</MyInput>
          <MyInput width="105px">Persons</MyInput>
        </div>
        <div className={classes.reservedFormTelephone}>
          <MyInput width="45px">+7</MyInput>
          <MyInput width="250px">Telephone</MyInput>
        </div>
        <button>Reserve</button>
      </div>
    );
  } else {
    return null;
  }
};
