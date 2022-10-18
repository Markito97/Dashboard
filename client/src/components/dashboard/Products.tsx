import { FC } from "react";
import { MyButton } from "../../assets/icons/MyButtons";
import { MyInput } from "../../assets/icons/MyInput";

interface IShowTables {
  showTables: boolean;
  remove: () => void;
}

export const Products: FC<IShowTables> = ({ showTables, remove }) => {
  return (
    <div className="product__list">
      <div className="product__card">
        <div className="product__picture">Picture</div>
        <div className="product__bottom">
          <div className="prod__b">
            <div className="product__remainder">Остаток</div>
            <div className="product__amount">5шт</div>
            <div className="product__price">Цена: 100р</div>
          </div>
          <div className="prod__btn">
            {/* <button className="product__btn">Add to Cart</button> */}
            <MyInput />
            <MyButton>Zopa</MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};
