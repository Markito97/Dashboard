import { MyRippleBtn } from "../buttons/MyButtons";
import { FC } from "react";

interface IMyProductProps {
  onClick?: () => void;
}

export const MyProductCard: FC<IMyProductProps> = ({ onClick }) => {
  return (
    <div className="product__card">
      <div className="product__picture">Picture</div>
      <div className="product__bottom">
        <div className="prod__b">
          <div className="product__remainder">Остаток</div>
          <div className="product__amount">5шт</div>
          <div className="product__price">Цена: 100р</div>
        </div>
        <div className="prod__btn">
          <MyRippleBtn width="100%" padding="8px" ripple={"#ffffff"}>
            Add to Cart
          </MyRippleBtn>
        </div>
      </div>
    </div>
  );
};