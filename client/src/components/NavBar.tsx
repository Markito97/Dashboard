import { NavLink } from "react-router-dom";
import { InvestSVG, FolderSVG, CoinSVG } from "../assets/UI/icons/MyIcons";
import { MyRippleBtn } from "../assets/UI/buttons/MyButtons";

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
        <MyRippleBtn ripple={"#ffffff"}>Aboba</MyRippleBtn>
      </div>
      <input className="nav__search" type="text" placeholder="search" />
    </div>
  );
};
