import { MyRippleBtn } from "../buttons/MyButtons";
import { FC } from "react";

interface IMyProductProps {
  id: string;
  title: string;
  description: string;
  picture: string;
  amount: number;
  price: number;
  show: (id: string) => any;
}

export const MyProductCard: FC<IMyProductProps> = ({
  id,
  title,
  description,
  picture,
  amount,
  price,
  show,
}) => {
  const test = () => {
    show(id);
  };

  return (
    <div className="product__card">
      <div className="product__picture">{picture}</div>
      <div className="product__bottom">
        <div className="prod__b">
          <div className="product__remainder">Остаток</div>
          <div className="product__amount">{`${amount}шт`}</div>
          <div className="product__price">{`Цена: ${price}`}</div>
        </div>
        <div className="prod__btn">
          <MyRippleBtn
            onCLick={test}
            width="100%"
            padding="8px"
            ripple={"#ffffff"}
          >
            Add to Cart
          </MyRippleBtn>
        </div>
      </div>
    </div>
  );
};
