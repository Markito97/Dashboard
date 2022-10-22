import { FC, useState } from "react";
import { MyTable } from "../assets/UI/tables/MyTable";
import { mockTables } from "../data/mockTables";
import { v4 as uidv4 } from "uuid";
import { MyRippleBtn } from "../assets/UI/buttons/MyButtons";

interface ICreateTableProps {
  create: (table: any) => void;
}

export const CreateTable: FC<ICreateTableProps> = ({ create }) => {
  const [option, setOption] = useState("small");

  const createTable = () => {
    const newTable = {
      id: uidv4(),
      tableSize: option,
    };
    create(newTable);
  };

  return (
    <div className="create__table__form">
      <select
        value={option}
        onChange={(e) => setOption(e.target.value)}
        name="table__form"
        className="table__select"
      >
        <option value="small">Small</option>
        <option value="average">Average</option>
        <option value="large">Large</option>
      </select>
      <MyRippleBtn padding="15px" onCLick={createTable} ripple={"#ffffff"}>
        Create table
      </MyRippleBtn>
    </div>
  );
};
