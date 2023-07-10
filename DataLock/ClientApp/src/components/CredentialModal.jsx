import { useContext, useState } from "react";
import { ColorContext } from "../contexts";
import InfoContainer from "./InfoContainer";
import { AiOutlineLeft, AiOutlineSave } from "react-icons/ai";
import { GoPencil, GoArrowUpRight } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { BiUser, BiKey, } from "react-icons/bi";

export default function CredentialModal() {
  // eslint-disable-next-line no-unused-vars
  const [disabled, setDisabled] = useState(true);
  const colors = useContext(ColorContext);

  const onEdit = () => {
    setDisabled(false);
  }
  const onSave = () => {
    // save updated credentials
    setDisabled(true);
  }
  return (
    <InfoContainer className="py-3">
      <div
        className="w-10/12 h-full flex flex-col justify-between items-center rounded-lg border-b-2 border-gray-600 py-2"
        style={{ backgroundColor: colors.tertiary }}
      >
        <div className="flex flex-row items-center justify-between w-11/12 mb-3 mt-3 drop-shadow-lg">
          <AiOutlineLeft size={30} className="cursor-pointer" />
          <div
            className="w-6/12 flex justify-center items-center rounded-md drop-shadow-lg h-full pb-1"
            style={{ backgroundColor: colors.primary, color: colors.quaternary }}
          >
            <span className="text-2xl">Name</span>
          </div>
          {(disabled) ?
            <GoPencil size={30} className="cursor-pointer" onClick={onEdit} />
            : <AiOutlineSave size={30} className="cursor-pointer" onClick={onSave} />}
        </div>
        <div className="flex flex-col justify-center items-center overflow-y-scroll overflow-x-hidden">
          <input
            type="text"
            placeholder="Name"
            className="h-8 w-full rounded-sm shadow-md text-center m-2 focus:outline-none outline-none"
            disabled={true}
            style={{ backgroundColor: colors.quaternary }}
          />
          <input
            type="text"
            placeholder="Username"
            className="h-8 w-full rounded-sm shadow-md text-center m-2 focus:outline-none outline-none"
            disabled={true}
            style={{ backgroundColor: colors.quaternary }}
          />
          <input
            type="Email"
            placeholder="Email"
            className="h-8 w-full rounded-sm shadow-md text-center m-2 focus:outline-none outline-none"
            disabled={true}
            style={{ backgroundColor: colors.quaternary }}
          />
          <input
            type="password"
            placeholder="Password"
            className="h-8 w-full rounded-sm shadow-md text-center m-2 focus:outline-none outline-none"
            disabled={true}
            style={{ backgroundColor: colors.quaternary }}
            value="somerandomvalue"
          />
          <input
            type="url"
            placeholder="Url"
            className="h-8 w-full rounded-sm shadow-md text-center m-2 focus:outline-none outline-none"
            disabled={true}
            style={{ backgroundColor: colors.quaternary }}
          />
          <textarea
            cols={20}
            rows={10}
            placeholder="Notes"
            className="w-full rounded-sm shadow-md text-center m-2 focus:outline-none outline-none"
            disabled={true}
            style={{ backgroundColor: colors.quaternary }}
          ></textarea>

        </div>
        <div
          className="flex flex-row justify-center items-center w-11/12 h-[40px] rounded-md drop-shadow-lg"
        // style={{ backgroundColor: colors.primary}}
        >
          <button
            className="w-3/12 h-[36px] flex justify-center items-center mx-1"
            style={{
              borderRadius: "4px",
              backgroundColor: colors.quaternary,
            }}
          >
            <BiUser size={30} />
          </button>
          <button
            className="w-3/12 h-[36px] flex justify-center items-center mx-1"
            style={{
              borderRadius: "4px",
              backgroundColor: colors.quaternary,
            }}
          >
            <BiKey size={30} />
          </button>
          <button
            className="w-3/12 h-[36px] flex justify-center items-center mx-1"
            style={{
              borderRadius: "4px",
              backgroundColor: colors.quaternary,
            }}
          >
            <FiMail size={30} />
          </button>
          <button
            className="w-3/12 h-[36px] flex justify-center items-center mx-1"
            style={{
              borderRadius: "4px",
              backgroundColor: colors.quaternary,
            }}
          >
            <GoArrowUpRight size={30} />
          </button>
          <button
            className="w-3/12 h-[36px] flex justify-center items-center mx-1 text-red-600"
            style={{
              borderRadius: "4px",
              backgroundColor: colors.quaternary,
            }}
          >
            <MdDelete size={30} />
          </button>
        </div>
      </div>
    </InfoContainer>
  );
}
