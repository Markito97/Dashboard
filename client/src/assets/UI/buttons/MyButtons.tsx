import React, { FC, useEffect } from "react";
import classes from "./MyButton.module.css";

interface IBtn {
  ripple: string;
  children: React.ReactNode;
}

export const MyRippleBtn: FC<IBtn> = ({ ripple, children }) => {
  useEffect(() => {
    const btnRipple: HTMLElement[] = Array.from(
      document.querySelectorAll(`.${classes.btn}`)
    );
    btnRipple.forEach((btn) => {
      btn.onclick = ({ pageX, pageY, currentTarget }) => {
        let currentOffSetLeft = (currentTarget as HTMLElement).offsetLeft;
        let currentOffSetTop = (currentTarget as HTMLElement).offsetTop;
        let currentOffSetWidth = (currentTarget as HTMLElement).offsetWidth;
        let currentOffSetHeight = (currentTarget as HTMLElement).offsetHeight;
        let axiosX = ((pageX - currentOffSetLeft) * 100) / currentOffSetWidth;
        let axiosY = ((pageY - currentOffSetTop) * 100) / currentOffSetHeight;
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
      className={`${classes.btn} ${classes.btnRipple}`}
      data-ripple={ripple}
    >
      {children}
    </button>
  );
};
