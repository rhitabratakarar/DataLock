import { useContext } from "react";
import { ColorContext } from "../contexts";
import { CgWebsite } from "react-icons/cg"

export default function Credential() {
  const colors = useContext(ColorContext);
  return (
    <div
      className="w-10/12 h-[48px] min-h-[48px] flex flex-row justify-center items-center my-2 rounded-md cursor-pointer"
      style={{ backgroundColor: colors.quaternary }}
    >
      <div className="flex flex-row w-7/12">
        <div className="flex items-center w-3/12 justify-center">
          <CgWebsite size={30} className="" />
        </div>
        
        <div className="flex flex-col justify-center items-start w-9/12 pl-2">
          <span>Name</span>
          <span>username</span>
        </div>
      </div>
      <div className="flex flow-row justify-end items-center w-5/12">
        <CgWebsite size={30} className="mr-2"/>
        <CgWebsite size={30} className="mr-2"/>
        <CgWebsite size={30} className="mr-2"/>
      </div>
    </div>
  );
}