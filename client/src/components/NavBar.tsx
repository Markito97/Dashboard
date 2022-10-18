import { NavLink } from "react-router-dom";
import { InvestSVG, FolderSVG, CoinSVG } from "../assets/UI/icons/MyIcons";

export const NavBar = () => {
  return (
    <div className="nav__bar">
      <div className="nav__bar__logo">SML</div>
      <div className="nav__bar__links">
        <NavLink className="nav__link__item" to={"/test"}>
          <InvestSVG />
        </NavLink>
        <NavLink className="nav__link__item" to={"/test"}>
          <InvestSVG />
        </NavLink>
        <NavLink className="nav__link__item" to={"/test"}>
          <CoinSVG />
        </NavLink>
        <NavLink className="nav__link__item" to={"/test"}>
          <FolderSVG />
        </NavLink>
        <NavLink className="nav__link__item" to={"/test"}>
          <FolderSVG />
        </NavLink>
        <NavLink className="nav__link__item" to={"/test"}>
          <FolderSVG />
        </NavLink>
      </div>
      <input className="nav__search" type="text" placeholder="search" />
    </div>
  );
};
