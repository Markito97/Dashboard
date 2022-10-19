import React, { FC, useEffect } from "react";
import classes from "./MyButton.module.css";

interface IBtn {
  ripple: string;
  children: React.ReactNode;
  width?: string;
  height?: string;
  padding?: string;
}

export const MyRippleBtn: FC<IBtn> = ({
  width,
  height,
  padding,
  ripple,
  children,
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
        console.log(classes.rippleEffect);
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
      style={{ width, height, padding }}
      className={`${classes.btn} ${classes.btnRipple}`}
      data-ripple={ripple}
    >
      {children}
    </button>
  );
};
