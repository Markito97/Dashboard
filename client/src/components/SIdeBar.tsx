import { NavLink } from "react-router-dom";
import { GridSvg } from "../assets/UI/icons/MyIcons";

export const SideBar = () => {
  return (
    <div className="side__bar">
      <li className="side__link__item">
        <NavLink className="side__link__item" to={"/dashboard"}>
          <GridSvg />
          Dashboard
        </NavLink>
      </li>
    </div>
  );
};
