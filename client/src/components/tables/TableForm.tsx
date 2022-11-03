import { FC, forwardRef, useImperativeHandle, useRef, useState } from "react";
import classes from "./Tables.module.css";

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

  return (
    <div>
      <div>
        <label htmlFor="input">hours:</label>
        <input
          onChange={(e) => {
            hourLengthValidator(e.target.value);
            hourOnlyNumbersValidator(e.target.value);
          }}
          type="text"
          placeholder="hours"
        />
        {isError ? (
          <p>Может содержать только цифры. И длинной от 0 до 2 символов.</p>
        ) : null}
      </div>

      <label htmlFor="input">minutes:</label>
      <input
        value={reservedTime.minute}
        onChange={(e) =>
          setReservedTime({ ...reservedTime, minute: e.target.value })
        }
        type="text"
        placeholder="minutes"
      />
    </div>
  );
});
