import { FC, useState } from "react";
import { MyRippleBtn } from "../../assets/UI/buttons/MyButtons";
import { ISales } from "../../types/types";

interface ICheckProps {
  id: string;
  isShow: boolean;
  sales: string[];
  setSales: React.Dispatch<any>;
}

export const CheckOutTest: FC<ICheckProps> = ({
  id,
  isShow,
  sales,
  setSales,
}) => {
  const [large, setLarge] = useState<any>([]);
  const [small, setSmall] = useState<any>([]);

  const addProducts = () => {
    if (id === "1") {
      setLarge([...large, "zopa"]);
    } else {
      setSmall([...small, "aboba"]);
    }
  };

  if (isShow) {
    return (
      <div className="check__out__test">
        <div className="check__out__list__item">
          {id === "1" ? <h1>small</h1> : <h1>large</h1>}
        </div>
        <MyRippleBtn onClick={addProducts} ripple={"#ffffff"}>
          Paid
        </MyRippleBtn>
      </div>
    );
  } else {
    return null;
  }
};

{
  /* <div className="check__out__item"> */
}
{
  /* <div className="item__num">1</div> */
}
{
  /* <div className="item__title">Title</div> */
}
{
  /* <div className="item__description">Description</div> */
}
{
  /* <div className="item__amount">5</div> */
}
{
  /* <div className="item__remove">remove</div> */
}
{
  /* </div> */
}
