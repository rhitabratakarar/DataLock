import { useContext } from "react";
import { ColorContext } from "../contexts";
import InfoContainer from "./InfoContainer";
import { AiOutlineLeft } from "react-icons/ai";
import { GoPencil } from "react-icons/go";

export default function CredentialModal() {
  const colors = useContext(ColorContext);
  return (
    <InfoContainer className="py-3">
      <div
        className="w-10/12 h-full flex flex-col items-center rounded-lg border-b-2 border-gray-600"
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
          <GoPencil size={25} className="cursor-pointer" />
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
      </div>
    </InfoContainer>
  );
}
