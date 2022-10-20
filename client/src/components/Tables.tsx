import { FC } from "react";
import { IShowHandler } from "../types/types";
import { LargeTable } from "./dashboard/LargeTable";
import { SmallTable } from "./dashboard/SmallTable";

export const Tables: FC<IShowHandler> = ({ id, onClick }) => {
  return (
    <div>
      <LargeTable id={id} onClick={onClick} />
      <SmallTable id={id} onClick={onClick} />
    </div>
  );
};
