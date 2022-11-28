import React, { FC, useState } from "react";
import { MyInput } from "../../assets/UI/MyInput/MyInput";
import { MySelect } from "../../assets/UI/MySelect/MySelect";
import classes from "./ReservedForm.module.css";

interface IReservedForm {
  isShowReservedForm: boolean;
}

export const ReservedForm: FC<IReservedForm> = ({ isShowReservedForm }) => {
  const [date, setDate] = useState({ date: "", isError: false });
  const [time, setTime] = useState({ time: "", isError: false });
  const [who, setWho] = useState({ who: "", isError: false });
  const [persons, setPersons] = useState({ persons: "", isError: false });
  const [telephone, setTelephone] = useState({ telephone: "", isError: false });

  const validationHandler = (e: React.FormEvent) => {
    e.preventDefault();
    validateDate();
    validateTime();
    validateWho();
    validatePersons();
    validateTelephone();
  };

  const validateDate = () => {
    if (date.date === "") {
      setDate({ ...date, isError: true });
    } else {
      setDate({ ...date, isError: false });
    }
  };

  const validateTime = () => {
    if (time.time === "") {
      setTime({ ...time, isError: true });
    } else {
      setTime({ ...time, isError: false });
    }
  };

  const validateWho = () => {
    if (who.who === "") {
      setWho({ ...who, isError: true });
    } else {
      setWho({ ...who, isError: false });
    }
  };

  const validatePersons = () => {
    if (persons.persons === "") {
      setPersons({ ...persons, isError: true });
    } else {
      setPersons({ ...persons, isError: false });
    }
  };

  const validateTelephone = () => {
    if (telephone.telephone === "") {
      setTelephone({ ...telephone, isError: true });
    } else {
      setTelephone({ ...telephone, isError: false });
    }
  };

  if (isShowReservedForm) {
    return (
      <div className={classes.reservedForm}>
        <h1 className={classes.reservedFormTitle}>Reserved Form</h1>
        <div className={classes.reservedFormDate}>
          <MyInput width="60px">Day</MyInput>
          <MySelect />
          <MyInput width="70px">Year</MyInput>
        </div>
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
