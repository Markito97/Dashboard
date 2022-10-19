import { FC } from "react";
import { MyRippleBtn } from "../../assets/UI/buttons/MyButtons";

interface ICheckProps {
  isShow: boolean;
}

export const CheckOutTest: FC<ICheckProps> = ({ isShow }) => {
  if (isShow) {
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
        </div>
        <MyRippleBtn ripple={"#ffffff"}>Paid</MyRippleBtn>
      </div>
    );
  } else {
    return null;
  }
};
