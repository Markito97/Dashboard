import React, { useEffect, useState } from "react";
import { MyProductCard } from "../assets/UI/productCard/MyProductCard";
import mockdata from "../data/mockdata";
import { ILarge } from "../types/types";
import { FC } from "react";

export const Products: FC<ILarge> = ({ tableId, large }) => {
  const showProduct = (id: string) => {
    const product = mockdata.find((prod) => prod.id === id);
    if (tableId === "1") {
      large(product);
    }
  };

  console.log(tableId);

  return (
    <div className="product__list">
      {mockdata.map((product, index) => (
        <MyProductCard
          key={index + 1}
          id={product.id}
          title={product.title}
          description={product.description}
          picture={product.picture}
          amount={product.amount}
          price={product.price}
          show={showProduct}
        />
      ))}
    </div>
  );
};
