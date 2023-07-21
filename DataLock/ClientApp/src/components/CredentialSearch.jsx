import { useContext, useEffect } from "react";
import { ColorContext } from "../contexts";
// import { BiSearchAlt } from "react-icons/bi";

export default function CredentialSearch() {
  const colors = useContext(ColorContext);
  useEffect(() => {
    const searchBox = document.getElementById("search");
    searchBox.style.boxShadow = `0 30px 30px ${colors.primary}`;
    searchBox.style.backdropFilter = "blur(12px)";
    searchBox.style.background = `linear-gradient(180deg, ${colors.primary}00, ${colors.primary})`;
  });
  return (
    <div
      id="search"
      className="w-[calc(100vw+100px)] min-w-[calc(100vw+100px)] h-[85px] min-h-[85px] items-center flex md:rounded-md md:mt-3 absolute -top-[40px] bg-transparent overflow-hidden"
      style={{ backgroundColor: colors.primary }}
    >
    </div>
  );
}
