import { useContext } from "react";
import { ColorContext } from "../contexts";
import { BiSolidCog, BiPlusCircle } from "react-icons/bi";
import { IoMdRefresh } from "react-icons/io";
import { AiOutlineCloudSync } from "react-icons/ai";

export default function PageFunctions({viewAddCredentialModal, viewSettingsModal}) {
  const colors = useContext(ColorContext);
  return (
    <div
      className="px-4 items-center flex flex-row h-[65px] w-full flex-shrink-0"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="flex flex-row w-full justify-between">
        <button
          className="w-2/12 h-[36px] flex justify-center items-center mx-2"
          style={{
            borderRadius: "4px",
            backgroundColor: colors.quaternary,
          }}
          onClick={() => viewAddCredentialModal()}
        >
          <BiPlusCircle size={30}/>
        </button>
        <button
          className="w-2/12 h-[36px] flex justify-center items-center mx-2"
          style={{
            borderRadius: "4px",
            backgroundColor: colors.quaternary,
          }}
        >
          <AiOutlineCloudSync size={30}/>
        </button>
        <button
          className="w-2/12 h-[36px] flex justify-center items-center mx-2"
          style={{
            borderRadius: "4px",
            backgroundColor: colors.quaternary,
          }}
        >
          <IoMdRefresh size={30}/>
        </button>
        <button
          className="w-2/12 h-[36px] flex justify-center items-center mx-2"
          style={{
            borderRadius: "4px",
            backgroundColor: colors.quaternary,
          }}
          onClick={() => viewSettingsModal()}
        >
          <BiSolidCog size={30}/>
        </button>
      </div>
    </div>
  );
}
