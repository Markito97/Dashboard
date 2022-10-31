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
            <span className="item__name">Dashboard</span>
          </a>
        </li>
        <li className="menu__list__item">
          <a className="list__item">
            <span className="icon__container">
              <CoinSVG />
            </span>
            <span className="item__name">Sales</span>
          </a>
        </li>
        <li className="menu__list__item">
          <a className="list__item">
            <span className="icon__container">
              <StocksSVG />
            </span>
            <span className="item__name">Stocks</span>
          </a>
        </li>
        <li className="menu__list__item">
          <a className="list__item">
            <span className="icon__container">
              <InvestSVG />
            </span>
            <span className="item__name">Charts</span>
          </a>
        </li>
      </ul>
      <ul>
        <li className="menu__list__item">
          <a className="list__item">
            <span className="icon__container">
              <SettingsSVG />
            </span>
            <span className="item__name">Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
