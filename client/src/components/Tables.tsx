import React from "react";
import { FC, useState } from "react";
import { MyTable } from "../assets/UI/tables/MyTable";

interface ITables {
  showHandler: (id: string) => void;
}

export const Tables: FC<ITables> = ({ showHandler }) => {
  const takeTableId = (e: React.MouseEvent) => {
    const id = (e.target as HTMLElement).id;
    showHandler(id);
  };
  return (
    <div className="table__arrangement">
      <MyTable id="1" onClick={takeTableId} width="100px" height="50px">
        1
      </MyTable>
      <MyTable id="2" onClick={takeTableId} width="300px" height="50px">
        2
      </MyTable>
      <MyTable id="3" onClick={takeTableId} width="500px" height="50px">
        3
      </MyTable>
    </div>
  );
};
