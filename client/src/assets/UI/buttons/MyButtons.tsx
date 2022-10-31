import React, { FC, useEffect, useState } from "react";
import { IBtn } from "../../../types/types";
import classes from "./MyButton.module.css";

export const MyRippleBtn: FC<IBtn> = ({
  id,
  width,
  height,
  padding,
  ripple,
  children,
  margin,
  marginTop,
  onCLick,
}) => {
  useEffect(() => {
    const btnRipple: HTMLElement[] = Array.from(
      document.querySelectorAll(`.${classes.btn}`)
    );
    btnRipple.forEach((btn) => {
      btn.onclick = ({ pageX, pageY, currentTarget }) => {
        const currentOffSetLeft = (currentTarget as HTMLElement).offsetLeft;
        const currentOffSetTop = (currentTarget as HTMLElement).offsetTop;
        const currentOffSetWidth = (currentTarget as HTMLElement).offsetWidth;
        const currentOffSetHeight = (currentTarget as HTMLElement).offsetHeight;
        const axiosX = ((pageX - currentOffSetLeft) * 100) / currentOffSetWidth;
        const axiosY = ((pageY - currentOffSetTop) * 100) / currentOffSetHeight;
        const ripple = document.createElement("span");
        const rippleColor = btn.dataset.ripple || "#212129";
        ripple.classList.add(`${classes.rippleEffect}`);
        ripple.style.background = rippleColor;

        btn.appendChild(ripple);
        ripple.style.left = axiosX + "%";
        ripple.style.top = axiosY + "%";

        setTimeout(() => {
          ripple.remove();
        }, 700);
      };
    });
  }, []);

  return (
    <button
      id={`${id}`}
      style={{ width, height, padding, margin, marginTop }}
      className={`${classes.btn} ${classes.btnRipple}`}
      data-ripple={ripple}
      onClick={onCLick}
    >
      {children}
    </button>
  );
};
