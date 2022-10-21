import React, { useState } from "react";
import { MyProductCard } from "../../assets/UI/productCard/MyProductCard";
import mockdata from "../../data/mockdata";

export const Products = () => {
  const showProduct = (id: string) => {
    console.log(mockdata.filter((prod) => prod.id == id));
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
