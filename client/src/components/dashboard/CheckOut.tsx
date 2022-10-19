import { IShow } from "../../types/types";
import { FC } from "react";
import React, { useState } from "react";
import { MyRippleBtn } from "../../assets/UI/buttons/MyButtons";

interface ITable {
  id: string;
  number: number;
  description: string;
}

interface ITables {
  tables: ITable[];
  isShow: boolean;
  id: string;
}

export const CheckOut: FC<ITables> = ({ tables, isShow, id }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [average, setAverage] = useState<any>([]);
  const [large, setLarge] = useState<any>([]);
  const [small, setSmall] = useState<any>([]);

  const addToTable = () => {
    const newCheck = {
      id: id,
      name: name,
      price: price,
    };

    for (let i = 0; i < tables.length; i++) {
      const tableSize = tables[i].description;
      const tableId = tables[i].id;

      const tableCheckLarge = tableSize === "large" && tableId === id;
      const tableCheckSmall = tableSize === "small" && tableId === id;
      const tableCheckAverage = tableSize === "average" && tableId === id;

      if (tableCheckLarge) {
        setLarge([...large, newCheck]);
        break;
      }
      if (tableCheckSmall) {
        setSmall([...small, "zopa"]);
        break;
      }
      if (tableCheckAverage) {
        setAverage([...average, "aboba"]);
        break;
      }
    }
  };

  if (isShow) {
    return (
      <div className="check__out">
        {tables.map((persons, index) => {
          if (persons.id === id) {
            return (
              <div className="field__checkout" key={id}>
                {persons.description}
                <div className="checkout__inputs">
                  <input
                    value={name}
                    onChange={(event) => setName(event?.target.value)}
                    type="text"
                    className="checkout__name"
                  />
                  <input
                    value={price}
                    onChange={(event) => setPrice(Number(event?.target.value))}
                    type="number"
                    className="checkout__price"
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    return null;
  }
};

export const CheckOutTest = () => {
  return (
    <div className="check__out__test">
      <div className="check__out__list__item">
        <div className="check__out__item">
          <div className="item__num">1</div>
          <div className="item__title">Title</div>
          <div className="item__description">Description</div>
          <div className="item__amount">5</div>
          <div className="item__remove">remove</div>
        </div>
        <div className="check__out__item">
          <div className="item__num">2</div>
          <div className="item__title">Title</div>
          <div className="item__description">Description</div>
          <div className="item__amount">5</div>
          <div className="item__remove">remove</div>
        </div>
        <div className="check__out__item">
          <div className="item__num">3</div>
          <div className="item__title">Title</div>
          <div className="item__description">Description</div>
          <div className="item__amount">5</div>
          <div className="item__remove">remove</div>
        </div>
        <div className="check__out__item">
          <div className="item__num">4</div>
          <div className="item__title">Title</div>
          <div className="item__description">Description</div>
          <div className="item__amount">5</div>
          <div className="item__remove">remove</div>
        </div>
        <div className="check__out__item">
          <div className="item__num">5</div>
          <div className="item__title">Title</div>
          <div className="item__description">Description</div>
          <div className="item__amount">5</div>
          <div className="item__remove">remove</div>
        </div>
      </div>
      <div>{/* <MyRippleBtn ripple={"#ffffff"}>Aboba</MyRippleBtn> */}</div>
    </div>
  );
};
