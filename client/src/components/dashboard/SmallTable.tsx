import { FC } from "react";
import { IShowHandler } from "../../types/types";

export const SmallTable: FC<IShowHandler> = ({ onClick }) => {
  return (
    <div id={"2"} onClick={onClick} className="small__table">
      2
    </div>
  );
};
