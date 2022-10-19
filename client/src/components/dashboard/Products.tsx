import { FC } from "react";
import { MyRippleBtn } from "../../assets/UI/buttons/MyButtons";
import { MyProductCard } from "../../assets/UI/productCard/MyProductCard";

interface IIsSales {
  isSale: string[];
  setIsSale: React.Dispatch<React.SetStateAction<string[]>>;
}

export const Products: FC<IIsSales> = ({ isSale, setIsSale }) => {
  return (
    <div className="product__list">
      <MyProductCard />
    </div>
  );
};
