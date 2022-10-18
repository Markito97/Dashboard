import React, { FC, useEffect } from "react";
import classes from "./MyButton.module.css";

interface IBtn {
  ripple: string;
  children: React.ReactNode;
}

export const MyRippleBtn: FC<IBtn> = ({ ripple, children }) => {
  useEffect(() => {
    const btnRipple: HTMLElement[] = Array.from(
      document.querySelectorAll(".MyButton_btnRipple__A-U6K")
    );
    btnRipple.forEach((btn) => {
      btn.onclick = ({ pageX, pageY, currentTarget }) => {
        const currentOffSetLeft = (currentTarget as HTMLElement).offsetLeft;
        const currentOffSetTop = (currentTarget as HTMLElement).offsetTop;
        const currentOffSetWidth = (currentTarget as HTMLElement).offsetWidth;
        const currentOffSetHeight = (currentTarget as HTMLElement).offsetHeight;
        let axiosX = ((pageX - currentOffSetLeft) * 100) / currentOffSetWidth;
        let axiosY = ((pageY - currentOffSetTop) * 100) / currentOffSetHeight;
        const ripple = document.createElement("span");
        const rippleColor = btn.dataset.ripple || "#212129";
        console.log(classes.rippleEffect);
        ripple.classList.add("MyButton_rippleEffect__K57ly");
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
