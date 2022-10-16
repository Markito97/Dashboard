import React, { FC, useEffect, useState } from "react";

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
    setCoords({
      x: e.clientX - (e.target as HTMLElement).offsetLeft,
      y: e.clientY,
    });
    onClick && onClick(e);
  };

  return (
    <button className="ripple__btn" onClick={handleClick}>
      {isRipple ? (
        <span
          className="ripple"
          style={{
            left: coords.x,
            top: coords.y,
          }}
        ></span>
      ) : (
        ""
      )}
      <span className="content">{children}</span>
    </button>
  );
};
