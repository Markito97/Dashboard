import {
  FC,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { MyInput } from "../../assets/UI/MyInput/MyInput";
import classes from "./TableForm.module.css";
import { TableFormError } from "./TableFormError";

interface ITableForm {
  dataHandler: (time: string) => void;
  ref: React.RefObject<any>;
}

interface IReservedTime {
  hour: string;
  minute: string;
}

export let TableForm = forwardRef((props, ref) => {
  const [reservedTime, setReservedTime] = useState<IReservedTime>({
    hour: "",
    minute: "",
  });
  const [isError, setIsError] = useState(false);

  useImperativeHandle(ref, () => ({
    test,
  }));
  const test = () => {
    console.log(123);
  };

  const lengthValidator = (length: number) => {
    return (value: string) => {
      if (value.length > length) {
        setIsError(true);
      } else {
        setReservedTime({ ...reservedTime, hour: value });
        setIsError(false);
      }
    };
  };

  const numberValidator = (regExp: any) => {
    return (value: string) => {
      if (regExp.test(value)) {
        console.log("ok");
      } else {
        console.log("Zopa");
      }
    };
  };

  const formatValidation = (number: number) => {
    return (value: string) => {
      if (Number(value) >= number) {
        console.log("Zopa");
      } else {
        console.log("ok");
      }
    };
  };

  const hourLengthValidator = lengthValidator(2);
  const hourOnlyNumbersValidator = numberValidator(/^[0-9]+$/);
  const hourFormnatValudation = formatValidation(23);

  // useEffect(() => {
  //   const error: HTMLParagraphElement | null = document.querySelector("p");
  //   if (isError) {
  //     error!.style.visibility = "visible";
  //   } else {
  //     error!.style.visibility = "hidden";
  //   }
  // }, [isError]);

  return (
    <div className={classes.reserved__form}>
      <span>Reserved for:</span>
      <div className={classes.reserved__form__fields}>
        <label htmlFor="input">hours:</label>
        <MyInput onChange={(e) => hourLengthValidator(e.target.value)} />
      </div>
      <TableFormError isError={isError} />

      <div className={classes.reserved__form__fields}>
        <label htmlFor="input">minutes:</label>
        <MyInput onChange={(e) => console.log(123)} />
      </div>
    </div>
  );
});
