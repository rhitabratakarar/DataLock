﻿import { useContext, useEffect } from "react";
import { ColorContext } from "../contexts";
import { BiUser, BiBookOpen, BiWorld, BiKey } from "react-icons/bi";

export default function Credential({
  viewCredentialModal,
  passCredentialData,
  refreshCredentialModal,
}) {
  const colors = useContext(ColorContext);
  useEffect(() => {
    // add database access code to get credential data and call {passCredentialData}
  });
  return (
    <div
      className="w-10/12 h-[80px] min-h-[80px] flex flex-row justify-center items-center my-3 rounded-md shadow-lg px-3"
      style={{ backgroundColor: colors.quaternary }}
    >
      <div className="flex flex-row w-7/12">
        <div className="flex items-center w-3/12 justify-center">
          <BiWorld size={30} className="cursor-pointer" />
        </div>

        <div className="flex flex-col justify-center items-start w-9/12 pl-2">
          <span className="text-lg">Name</span>
          <span>username</span>
        </div>
      </div>
      <div className="flex flow-row justify-end items-center w-5/12">
        <BiUser size={30} className="mr-2 cursor-pointer" />
        <BiKey size={30} className="mr-2 cursor-pointer" />
        <BiBookOpen
          size={30}
          className="mr-2 cursor-pointer"
          onClick={() => {
            refreshCredentialModal();
            viewCredentialModal();
            passCredentialData({
              name: "Vikram",
              username: "vikram",
              email: "vik@vik.vik",
              password: "vikramvik",
              url: "http://vikramadityacodes.in",
              notes: "vikramaditya",
            });
          }}
        />
      </div>
    </div>
  );
}
