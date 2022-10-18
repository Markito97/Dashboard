import React, { CSSProperties, FC, useEffect, useState } from "react";

interface IChild {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
}

export const MyButton: FC<IChild> = ({ children, onClick }) => {
  const [isRipple, setIsRipple] = useState(true);
  const [coords, setCoords] = useState({ x: -1, y: -1 });

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRipple(true);

      setTimeout(() => {
        setIsRipple(false);
      }, 1000);
    } else {
      setIsRipple(false);
    }
  }, [coords]);

  useEffect(() => {
    if (!isRipple) setCoords({ x: -1, y: -1 });
  }, [isRipple]);

  const handleClick = (e: React.MouseEvent) => {
    const eventX = (e.target as HTMLElement).offsetLeft;
    const eventY = (e.target as HTMLElement).offsetLeft;
    setCoords({
      x: e.clientX - eventX,
      y: e.clientY - eventY,
    });
    onClick && onClick(e);
  };

  return (
    <button className="ripple__btn" onClick={handleClick}>
      {isRipple ? (
        <span
          className="ripple"
          style={{
            left: coords.x + "px",
            top: coords.y + "px",
          }}
        ></span>
      ) : (
        ""
      )}
      <span className="content">{children}</span>
    </button>
  );
};

interface IBtn {
  type: "button";
  id: string;
  className: string;
  ripple: string;
  style?: CSSProperties | undefined;

  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
}

// {type, id, className, ripple, onClick, style,children}

export const MyRippleBtn: FC<IBtn> = ({
  type,
  id,
  className,
  ripple,
  onClick,
  style,
  children,
}) => {
  useEffect(() => {
    const btnRipple: HTMLElement[] = Array.from(
      document.querySelectorAll(".btn-ripple")
    );
    btnRipple.forEach((btn) => {
      btn.onclick = ({ pageX, pageY, currentTarget }) => {
        let x =
          ((pageX - (currentTarget as HTMLElement).offsetLeft) * 100) /
          (currentTarget as HTMLElement).offsetWidth;
        let y =
          ((pageY = (currentTarget as HTMLAreaElement).offsetTop) * 100) /
          (currentTarget as HTMLElement).offsetHeight;
        const ripple = document.createElement("span");
        const rippleColor = btn.dataset.ripple || "#212129";
        ripple.classList.add("ripple-effect");
        ripple.style.background = rippleColor;

        btn.appendChild(ripple);
        ripple.style.left = x + "%";
        ripple.style.top = y + "%";

        setTimeout(() => {
          ripple.remove();
        }, 700);
      };
    });
  }, []);

  return (
    <button
      // type={type ? type : "button"}
      // id={id}
      // className={`btn btn-ripple ${className ? className : ""}`}
      className="btn btn-ripple"
      data-ripple={ripple}
      // onClick={onClick}
      // style={style}
    >
      {children}
    </button>
  );
};
