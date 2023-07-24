import { useContext, useState } from "react";
import { ColorContext } from "../contexts";
import InfoContainer from "./InfoContainer";
import { AiOutlineLeft, AiOutlineSave } from "react-icons/ai";

export default function AddCredentialModal({ viewCredentialList }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [url, setURL] = useState("");
  const [notes, setNotes] = useState("");
  const colors = useContext(ColorContext);

  const onSave = () => {
    // submit to server
  };

  return (
    <InfoContainer className="py-3">
      <div
        className="w-10/12 h-full flex flex-col justify-between items-center rounded-lg border-b-2 border-gray-600 py-2"
        style={{ backgroundColor: colors.tertiary }}
      >
        <div className="flex flex-row items-center justify-between w-11/12 mb-3 mt-3 drop-shadow-lg">
          <AiOutlineLeft
            size={30}
            className="cursor-pointer"
            onClick={() => viewCredentialList()}
          />
          <div
            className="w-6/12 flex justify-center items-center rounded-md drop-shadow-lg h-full pb-1"
            style={{
              backgroundColor: colors.primary,
              color: colors.quaternary,
            }}
          >
            <span className="text-2xl">Name</span>
          </div>
          <AiOutlineSave size={30} />
        </div>
        <div className="flex flex-col justify-center items-center overflow-y-scroll overflow-x-hidden">
          <input
            id="name"
            type="text"
            placeholder="Name"
            className="h-8 w-full rounded-sm shadow-md text-center m-2 focus:outline-none outline-none"
            style={{ backgroundColor: colors.quaternary }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            id="username"
            type="text"
            placeholder="Username"
            className="h-8 w-full rounded-sm shadow-md text-center m-2 focus:outline-none outline-none"
            style={{ backgroundColor: colors.quaternary }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            id="email"
            type="Email"
            placeholder="Email"
            className="h-8 w-full rounded-sm shadow-md text-center m-2 focus:outline-none outline-none"
            style={{ backgroundColor: colors.quaternary }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="h-8 w-full rounded-sm shadow-md text-center m-2 focus:outline-none outline-none"
            style={{ backgroundColor: colors.quaternary }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            id="url"
            type="url"
            placeholder="Url"
            className="h-8 w-full rounded-sm shadow-md text-center m-2 focus:outline-none outline-none"
            style={{ backgroundColor: colors.quaternary }}
            value={url}
            onChange={(e) => setURL(e.target.value)}
          />
          <textarea
            id="notes"
            cols={20}
            rows={10}
            placeholder="Notes"
            className="w-full rounded-sm shadow-md text-center m-2 focus:outline-none outline-none"
            style={{ backgroundColor: colors.quaternary }}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>
        <div className="flex flex-row justify-center items-center w-11/12 h-[40px] rounded-md drop-shadow-lg">
          <button
            className="w-3/12 h-[36px] flex justify-center items-center mx-1"
            style={{
              borderRadius: "4px",
              backgroundColor: colors.quaternary,
            }}
            onClick={() => onSave("username")}
          >
            Submit
          </button>
        </div>
      </div>
    </InfoContainer>
  );
}
