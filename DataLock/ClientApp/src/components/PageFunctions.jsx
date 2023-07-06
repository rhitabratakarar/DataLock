import { useContext } from "react";
import { ColorContext } from "../contexts";
import { BiSearchAlt } from "react-icons/bi";

export default function PageFunctions() {
  const colors = useContext(ColorContext);
  return (
    <div
      className="search-container px-10 items-center flex mt-3"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="flex flex-row w-full justify-center">
        {/* <input
          className="h-[36px] w-10/12"
          style={{ borderRadius: "4px 0 0 4px" }}
        /> */}
        <button
          className="w-3/12 h-[36px] flex justify-center items-center mx-2"
          style={{
            borderRadius: "4px",
            backgroundColor: colors.quaternary,
          }}
        >
          <BiSearchAlt size={30}/>
        </button>
        <button
          className="w-3/12 h-[36px] flex justify-center items-center mx-2"
          style={{
            borderRadius: "4px",
            backgroundColor: colors.quaternary,
          }}
        >
          <BiSearchAlt size={30}/>
        </button>
        <button
          className="w-3/12 h-[36px] flex justify-center items-center mx-2"
          style={{
            borderRadius: "4px",
            backgroundColor: colors.quaternary,
          }}
        >
          <BiSearchAlt size={30}/>
        </button>
        <button
          className="w-3/12 h-[36px] flex justify-center items-center mx-2"
          style={{
            borderRadius: "4px",
            backgroundColor: colors.quaternary,
          }}
        >
          <BiSearchAlt size={30}/>
        </button>
      </div>
    </div>
  );
}
