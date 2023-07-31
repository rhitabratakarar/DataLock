import { useContext, useEffect } from "react";
import { ColorContext } from "../contexts";

export default function SearchTopOverlay() {
  const colors = useContext(ColorContext);
  useEffect(() => {
    const searchBox = document.getElementById("search");
    searchBox.style.boxShadow = `0 100px 60px ${colors.primary}`;
    searchBox.style.backdropFilter = "blur(12px)";
    searchBox.style.background = `linear-gradient(180deg, ${colors.primary}00, ${colors.primary})`;
  });
  return (
    <div
      id="search"
      className="w-[calc(100vw+100px)] min-w-[calc(100vw+100px)] h-[85px] min-h-[85px] items-center flex md:rounded-md md:mt-3 fixed -top-[120px] bg-transparent overflow-hidden z-10"
      style={{ backgroundColor: colors.primary }}
    ></div>
  );
}
