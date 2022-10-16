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
      }, 250);
    } else {
      setIsRipple(false);
    }
  }, [coords]);

  useEffect(() => {
    if (!isRipple) setCoords({ x: -1, y: -1 });
  }, [isRipple]);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e.clientY);
    // const eventX = (e.target as HTMLElement).offsetLeft;
    // const eventY = (e.target as HTMLElement).offsetLeft;
    setCoords({
      x: e.clientX,
      y: e.clientY,
    });
    onClick && onClick(e);
  };

  const zopa = () => {
    return null;
  };

  const aboba = () => {
    return null;
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
