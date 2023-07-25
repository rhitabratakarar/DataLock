import { useContext, useState } from "react";
import { ColorContext } from "../contexts";
import { BiSolidCog, BiPlusCircle, BiSearchAlt } from "react-icons/bi";
import { IoMdRefresh } from "react-icons/io";
import { AiOutlineCloudSync } from "react-icons/ai";

export default function PageFunctions({
  viewAddCredentialModal,
  viewSettingsModal,
  viewCredentialList,
  searchButtonClass,
}) {
  const [addToggle, setAddToggle] = useState(true);
  const [settingsToggle, setSettingsToggle] = useState(true);
  const colors = useContext(ColorContext);
  return (
    <div
      className="px-4 items-center flex flex-row h-[65px] w-full flex-shrink-0 fixed bottom-0"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="flex flex-row w-full justify-evenly relative">
        <button
          id="add-credential"
          className="w-2/12 flex justify-center items-center mx-4 z-10"
          style={{ color: colors.quaternary }}
          onClick={() => {
            if (addToggle) {
              viewCredentialList();
              if (settingsToggle) {
                setSettingsToggle(true);
                setAddToggle(false);
                viewAddCredentialModal();
              } else {
                setTimeout(() => {
                  setSettingsToggle(true);
                  setAddToggle(false);
                  viewAddCredentialModal();
                }, 310);
              }
            } else {
              viewCredentialList();
              setAddToggle(true);
            }
          }}
        >
          <BiPlusCircle size={40} />
        </button>
        <button
          className="w-2/12 flex justify-center items-center mx-4 z-10"
          style={{ color: colors.quaternary }}
        >
          <AiOutlineCloudSync size={40} />
        </button>
        <button
          className="w-2/12 flex justify-center items-center mx-4 z-10"
          style={{ color: colors.quaternary }}
        >
          <IoMdRefresh size={40} />
        </button>
        <button
          className="w-2/12 flex justify-center items-center mx-4 z-10"
          style={{ color: colors.quaternary }}
          onClick={() => {
            if (settingsToggle) {
              viewCredentialList();
              if(addToggle) {
                setAddToggle(true);
                setSettingsToggle(false);
                viewSettingsModal();
              } else {
                setTimeout(() => {
                  setAddToggle(true);
                  setSettingsToggle(false);
                  viewSettingsModal();
              }, 310);
              } 
            } else {
              setSettingsToggle(true);
              viewCredentialList();
            }
          }}
        >
          <BiSolidCog size={40} />
        </button>
        <button
          className={`w-[60px] h-[60px] flex justify-center items-center mx-4 absolute rounded-full shadow-md ${searchButtonClass} transition-all duration-300 ease-in-out z-0 bottom-[75px]`}
          style={{ color: colors.quaternary, backgroundColor: colors.primary }}
        >
          <BiSearchAlt size={40} />
        </button>
      </div>
    </div>
  );
}
