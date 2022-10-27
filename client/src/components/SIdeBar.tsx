import { NavLink } from "react-router-dom";
import {
  CoinSVG,
  GridSvg,
  InvestSVG,
  SettingsSVG,
  StocksSVG,
} from "../assets/UI/icons/MyIcons";

export const SideBar = () => {
  return (
    <div className="side__bar">
      <div>
        <li className="side__link__item">
          <NavLink className="side__link" to={"/dashboard"}>
            <span className="side__icon__container">
              <GridSvg />
            </span>
            <span className="side__item__name">Dashboard</span>
          </NavLink>
        </li>
        <li className="side__link__item">
          <NavLink className="side__link" to={"/dashboard"}>
            <span className="side__icon__container">
              <CoinSVG />
            </span>
            <span className="side__item__name">Sales</span>
          </NavLink>
        </li>
        <li className="side__link__item">
          <NavLink className="side__link" to={"/dashboard"}>
            <span className="side__icon__container">
              <StocksSVG />
            </span>
            <span className="side__item__name">Stocks</span>
          </NavLink>
        </li>

        <li className="side__link__item">
          <NavLink className="side__link" to={"/dashboard"}>
            <span className="side__icon__container">
              <InvestSVG />
            </span>
            <span className="side__item__name">Charts</span>
          </NavLink>
        </li>
      </div>

      <div className="settings">
        <li className="side__link__item">
          <NavLink className="side__link" to={"/dashboard"}>
            <span className="side__icon__container">
              <SettingsSVG />
            </span>
            <span className="side__item__name">Settings</span>
          </NavLink>
        </li>
      </div>
    </div>
  );
};
