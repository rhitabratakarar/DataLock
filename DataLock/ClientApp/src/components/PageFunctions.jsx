import { useContext, useState } from "react";
import { ColorContext } from "../contexts";
import { BiSolidCog, BiPlusCircle, BiSearchAlt } from "react-icons/bi";
import { IoMdRefresh } from "react-icons/io";
import { AiOutlineCloudSync } from "react-icons/ai";

export default function PageFunctions({
  viewAddCredentialModal,
  viewSettingsModal,
  viewCredentialList,
}) {
  const [toggle, setToggle] = useState(true);
  const colors = useContext(ColorContext);
  return (
    <div
      className="px-4 items-center flex flex-row h-[65px] w-full flex-shrink-0"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="flex flex-row w-full justify-evenly relative">
        <button
          className="w-2/12 flex justify-center items-center mx-4"
          style={{ color: colors.quaternary }}
          onClick={() => {
            if (toggle) {
              setToggle(false);
              viewAddCredentialModal();
              console.log(toggle);
            } else {
              viewCredentialList();
              setToggle(true);
            }
          }}
        >
          <BiPlusCircle size={40} />
        </button>
        <button
          className="w-2/12 flex justify-center items-center mx-4"
          style={{ color: colors.quaternary }}
        >
          <AiOutlineCloudSync size={40} />
        </button>
        <button
          className="w-2/12 flex justify-center items-center mx-4"
          style={{ color: colors.quaternary }}
        >
          <IoMdRefresh size={40} />
        </button>
        <button
          className="w-2/12 flex justify-center items-center mx-4"
          style={{ color: colors.quaternary }}
          onClick={() => viewSettingsModal()}
        >
          <BiSolidCog size={40} />
        </button>
        <button
          className="w-[60px] h-[60px] flex justify-center items-center mx-4 absolute bottom-[75px] -right-[2rem] rounded-full shadow-md"
          style={{ color: colors.quaternary, backgroundColor: colors.primary }}
        >
          <BiSearchAlt size={40} />
        </button>
      </div>
    </div>
  );
}
