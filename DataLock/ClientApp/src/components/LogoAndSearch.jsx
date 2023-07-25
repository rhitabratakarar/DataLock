import { useContext, useEffect } from "react";
import { ColorContext } from "../contexts";

export default function LogoAndSearch({viewCredentialList}) {
  const colors = useContext(ColorContext);
  useEffect(() => {
    const searchBox = document.getElementById("search");
    searchBox.style.boxShadow = `0 100px 60px ${colors.primary}`;
    searchBox.style.backdropFilter = "blur(12px)";
    searchBox.style.background = `linear-gradient(180deg, ${colors.primary}00, ${colors.primary})`;
  });
  return (
    <div
      id="logoandsearch"
      className="w-[calc(100vw+100px)] min-w-[calc(100vw+100px)] h-[85px] min-h-[85px] items-center flex md:rounded-md md:mt-3 fixed top-0 z-20 px-[5.5rem] justify-between"
    >
      <img src="../icons/favicon.ico" alt="icon" onClick={() => viewCredentialList()} className="cursor-pointer"/>
      <input
        type="text"
        className="bg-transparent w-full focus:outline-none text-right text-transparent pr-[0.1rem]"
        style={{ textShadow: `0 0 0 ${colors.quaternary}` }}
      />
      <div
        id="search-input"
        className="border-r-2 border-solid w-1 h-2/6"
        style={{ borderColor: colors.quaternary }}
      ></div>
    </div>
  );
}
