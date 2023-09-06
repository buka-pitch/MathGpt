import { useEffect, useState } from "react";

// useWindowDimension.js
export function useMediaQuery() {
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();
  useEffect(() => {
    const updateDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return { width, height };
}
