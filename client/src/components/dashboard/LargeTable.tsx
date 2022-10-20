import { FC } from "react";
import { IShowHandler } from "../../types/types";

export const LargeTable: FC<IShowHandler> = ({ onClick }) => {
  return (
    <div id={"1"} onClick={onClick} className="large__table">
      1
    </div>
  );
};
