import React, { useEffect, useState } from "react";

const CustomCurser = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);


  return (
    <>
      <div
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
        className={`${isHovered ? `h-16 w-16 bg-yellow-500` : `h-5 w-5 bg-[#111`} fixed bg-yellow-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-difference`}
      ></div>
      <h1
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="text-9xl text-center font-bold"
      >
        Hello World This is Custom Cursor
      </h1>
    </>
  );
};

export default CustomCurser;
