import { FC, useState } from "react";
import { MyTable } from "../assets/UI/tables/MyTable";
import { mockTables } from "../data/mockTables";
import { v4 as uuidv4 } from "uuid";
import { MyRippleBtn } from "../assets/UI/buttons/MyButtons";

interface ICreateTableProps {
  create: (table: any) => void;
}

export const CreateTable: FC<ICreateTableProps> = ({ create }) => {
  const [option, setOption] = useState("small");
  const [date, setDate] = useState("");

  const createTable = () => {
    const newTable = {
      id: uuidv4(),
      checked: false,
      tableSize: option,
    };
    create(newTable);
  };

  return (
    <div className="create__table">
      <div className="create__table__container">
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
        <MyRippleBtn onCLick={createTable} ripple={"#ffffff"}>
          Create table
        </MyRippleBtn>
        <MyRippleBtn ripple={"#ffffff"}>Sort by active</MyRippleBtn>
        <MyRippleBtn ripple={"#ffffff"}>Sort by reserved</MyRippleBtn>
        <MyRippleBtn ripple={"#ffffff"}>Sort by inactive</MyRippleBtn>
      </div>
    </div>
  );
};
