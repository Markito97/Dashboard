import { useState } from "react";
import { CheckOutTest } from "./dashboard/CheckOut";
import { Products } from "./dashboard/Products";

import { Tables } from "./Tables";

export const DashBoard = () => {
  const [id, setId] = useState("1");
  const [isShow, setIsShow] = useState(false);
  const showHandler = (id: string) => {
    console.log(id);
  };

  return (
    <div className="dashboard__content">
      {isShow ? <Products /> : <Tables showHandler={showHandler} />}
      <CheckOutTest id={id} isShow={isShow} />
    </div>
  );
};
