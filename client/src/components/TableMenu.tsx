import { FC } from "react";

interface ITableMenu {
  isShow: boolean;
}

export const TableMenu: FC<ITableMenu> = ({ isShow }) => {
  if (isShow) {
    return (
      <div className="table__menu">
        <div>
          <button>reserve</button>
          <button>active</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
