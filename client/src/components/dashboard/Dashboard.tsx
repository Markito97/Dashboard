import React, { useState } from "react";
import { CheckOut, CheckOutTest } from "./CheckOut";
import { Products } from "./Products";

export const DashBoard = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const tables = [
    {
      id: "1",
      number: 1,
      description: "large",
    },
    {
      id: "2",
      number: 2,
      description: "small",
    },
    {
      id: "3",
      number: 3,
      description: "average",
    },
  ];
  const [showTables, setShowTables] = useState<boolean>(true);

  const showCheckOut = (e: React.MouseEvent) => {
    const id = (e.target as HTMLElement).id;
    tables.forEach((element) => {
      if (element.id === id) {
        setIsShow(true);
        setId(id);
        setShowTables(false);
      }
    });
  };

  const remove = () => {
    setShowTables(true);
  };

  const field = tables.map((table, index) => {
    if (table.description === "large") {
      return (
        <div
          className="large__table"
          onClick={showCheckOut}
          id={`${table.id}`}
          key={index}
        >
          {table.number}
        </div>
      );
    } else if (table.description === "small") {
      return (
        <div
          className="small__table"
          onClick={showCheckOut}
          id={`${table.id}`}
          key={index}
        >
          {table.number}
        </div>
      );
    } else if (table.description === "average") {
      return (
        <div
          className="average__table"
          onClick={showCheckOut}
          id={`${table.id}`}
          key={index}
        >
          {table.number}
        </div>
      );
    }
  });

  return (
    <div className="main__dashboard">
      <div className="table__arrangement">
        {showTables ? (
          field
        ) : (
          <Products showTables={showTables} remove={remove} />
        )}
      </div>
      {/* <CheckOut isShow={isShow} tables={tables} id={id} /> */}

      {/* Need try test new checkout */}

      <CheckOutTest />
    </div>
  );
};
