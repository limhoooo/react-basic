import { useState, useEffect } from "react";
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const resize = () => {
      console.log(window.innerWidth);
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []); // 빈배열 안넣었을시 resize 이벤트를 계~~속 add 하기때문에 넣어줘야함
  return width;
};

export default useWindowWidth;
