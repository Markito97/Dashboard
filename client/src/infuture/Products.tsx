import React, { useEffect, useState } from "react";
import { MyProductCard } from "../assets/UI/productCard/MyProductCard";
import mockdata from "../data/mockdata";
import { FC } from "react";

export interface ILarge {
  tables: any[];
  tableId?: string;
  largeTable?: any[];
  large: (object: any) => void;
}

export const Products: FC<ILarge> = ({ tables, tableId, large }) => {
  const showProduct = (id: string) => {
    const product = mockdata.find((prod) => prod.id === id);
    tables.forEach((el) => {
      if (el.id === tableId) {
        const addToCart = {
          tableId: tableId,
          product: product,
        };
        large(addToCart);
      }
    });
  };

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
