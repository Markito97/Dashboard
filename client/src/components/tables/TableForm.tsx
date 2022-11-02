import { FC, useState } from "react";
import classes from "./Tables.module.css";

interface ITableForm {
  dataHandler: (time: string) => void;
}

interface IReservedTime {
  hour: string;
  minute: string;
}

export const TableForm: FC<ITableForm> = ({ dataHandler }) => {
  const [reservedTime, setReservedTime] = useState<IReservedTime>({
    hour: "",
    minute: "",
  });
  const validationDate = () => {
    const regExp = /^\d+$/;
    if (regExp.test(reservedTime.hour)) {
    } else {
    }
  };

  return (
    <div>
      <label htmlFor="input">hours:</label>
      <input
        value={reservedTime.hour}
        onChange={(e) =>
          setReservedTime({ ...reservedTime, hour: e.target.value })
        }
        type="text"
        placeholder="hours"
      />
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
};
