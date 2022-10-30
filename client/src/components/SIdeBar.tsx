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
    <div className="sidebar__menu">
      <ul className="sidebar__menu__list">
        <li className="menu__list__item">
          <a className="list__item">
            <span className="icon__container">
              <GridSvg />
            </span>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="menu__list__item">
          <a className="list__item">
            <span className="icon__container">
              <CoinSVG />
            </span>
            <span>Sales</span>
          </a>
        </li>
        <li className="menu__list__item">
          <a className="list__item">
            <span className="icon__container">
              <StocksSVG />
            </span>
            <span>Stocks</span>
          </a>
        </li>
        <li className="menu__list__item">
          <a className="list__item">
            <span className="icon__container">
              <InvestSVG />
            </span>
            <span>Charts</span>
          </a>
        </li>
      </ul>
      <ul>
        <li className="menu__list__item">
          <a className="list__item">
            <span className="icon__container">
              <SettingsSVG />
            </span>
            <span>Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
