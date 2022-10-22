import { useState } from "react";
import { MyTable } from "../assets/UI/tables/MyTable";
import { mockTables } from "../data/mockTables";
import { v4 as uidv4 } from "uuid";

export const CreateTable = () => {
  //   const tables = mockTables.map((table, index) => (
  //     <MyTable>{table.id}</MyTable>
  //   ));
  const [tables, setTables] = useState<any[]>([]);
  const [option, setOption] = useState("");

  const handleChange = (event: any) => {
    console.log(event.target.value);
  };

  const createTable = () => {
    const newTable = {
      id: uidv4(),
    };
  };
  return (
    <div className="create__table__form">
      <select defaultValue={option} onChange={handleChange} name="table__form">
        <option selected value="small">
          Small
        </option>
        <option value="average">Average</option>
        <option value="large">Large</option>
      </select>
    </div>
  );
};
