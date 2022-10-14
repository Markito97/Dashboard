import { FC } from "react";

interface IShowTables {
  showTables: boolean;
  remove: () => void;
}

export const Products: FC<IShowTables> = ({ showTables, remove }) => {
  return (
    <div className="table__arrangement">
      zopa
      <button onClick={remove}>Aboba</button>
    </div>
  );
};
