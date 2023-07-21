import { useContext } from "react";
import { ColorContext } from "../contexts";
import { BiSearchAlt } from "react-icons/bi";

export default function CredentialSearch() {
  const colors = useContext(ColorContext);
  return (
    <div
      id="search"
      className="w-full h-[65px] min-h-[65px] px-10 items-center flex md:rounded-md md:mt-3"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="flex flex-row w-full justify-center">
        <input
          className="h-[36px] w-10/12"
          style={{ borderRadius: "4px 0 0 4px" }}
        />
        <button
          className="w-2/12 flex justify-center items-center"
          style={{
            borderRadius: "0 4px 4px 0",
            backgroundColor: colors.quaternary,
          }}
        >
          <BiSearchAlt size={30}/>
        </button>
      </div>
    </div>
  );
}
