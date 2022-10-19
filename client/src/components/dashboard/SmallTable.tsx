import { useState } from "react";
import { CheckOutTest } from "./CheckOut";

export const SmallTable = () => {
  const [small, setSmall] = useState("");
  const [isShow, setIsShow] = useState(false);
  const check = () => {
    setIsShow(true);
  };
  return (
    <div onClick={check} className="small__table">
      <CheckOutTest isShow={isShow} />
    </div>
  );
};
