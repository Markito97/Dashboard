import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="side__bar">
      <NavLink className="side__link__item" to={"/dashboard"}>
        Dashboard
      </NavLink>
      <NavLink className="side__link__item" to={"/trades"}>
        Trades
      </NavLink>
      <NavLink className="side__link__item" to={"/stocks"}>
        Stocks
      </NavLink>
      <NavLink className="side__link__item" to={"/charts"}>
        Charts
      </NavLink>
      <NavLink className="side__link__item" to={"/productform"}>
        Product Form
      </NavLink>
    </div>
  );
};
