import { useContext, useState } from "react";
import { ColorContext } from "../contexts";
import { GoArrowUpRight } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { BiUser, BiKey } from "react-icons/bi";
import TextField from "./TextField";
import adjustBrightness from "../deeperColor";

export default function CredentialModal({
  viewCredentialList,
  credentialData,
  showStatus,
  toggleCredentialListRefresh,
}) {
  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState(credentialData.name);
  const [username, setUsername] = useState(credentialData.username);
  const [password, setPassword] = useState(credentialData.password);
  const [email, setEmail] = useState(credentialData.email);
  const [url, setURL] = useState(credentialData.url);
  const [notes, setNotes] = useState(credentialData.notes);
  const colors = useContext(ColorContext);

  const onEdit = () => {
    setDisabled(false);
  };
  const onSave = () => {
    setDisabled(true);
    if (window.confirm("Save this Credential?")) {
      fetch(
        `https://localhost:44414/api/credential/${credentialData.credentialId}`,
        {
          method: "PUT",
          body: JSON.stringify({
            name,
            username,
            password,
            email,
            url,
            notes,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        if (res.ok) {
          viewCredentialList();
          showStatus("Updated");
          toggleCredentialListRefresh();
        } else {
          showStatus("Error");
        }
      });
    }
  };

  const copyText = (id) => {
    const elementText = document.getElementById(id).value;
    navigator.clipboard.writeText(elementText);
  };

  const onDelete = () => {
    if (window.confirm("Delete this Credential?")) {
      fetch(
        `https://localhost:44414/api/credential/${credentialData.credentialId}`,
        {
          method: "DELETE",
        }
      ).then((res) => {
        if (res.ok) {
          viewCredentialList();
          showStatus("Deleted");
          toggleCredentialListRefresh();
        } else {
          showStatus("Error");
        }
      });
    }
  };

  return (
    <div
      id="credential-modal"
      className="w-full h-full flex flex-col justify-start items-center relative"
      style={{ backgroundColor: colors.tertiary }}
    >
      <div className="flex w-full flex-col justify-start items-center overflow-y-scroll overflow-x-hidden pt-4 pb-[100px]">
        <TextField
          id="name"
          type="text"
          label="Name"
          disabled={disabled}
          style={{ backgroundColor: colors.quaternary }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="username"
          type="text"
          label="Username"
          disabled={disabled}
          style={{ backgroundColor: colors.quaternary }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="email"
          type="Email"
          label="Email"
          disabled={disabled}
          style={{ backgroundColor: colors.quaternary }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          type="password"
          label="Password"
          disabled={disabled}
          style={{ backgroundColor: colors.quaternary }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          id="url"
          type="url"
          label="Url"
          disabled={disabled}
          style={{ backgroundColor: colors.quaternary }}
          value={url}
          onChange={(e) => setURL(e.target.value)}
        />
        <div className="w-9/12">
          <label
            htmlFor="add-notes"
            className="block text-lg font-medium leading-6 text-gray-900 mb-1"
          >
            About
          </label>
          <textarea
            id="add-notes"
            rows={6}
            disabled={disabled}
            label="Notes"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>
        <div className="w-4/12 flex flex-row justify-between items-center h-[40px] rounded-md drop-shadow-lg mt-3">
          <button
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => viewCredentialList()}
          >
            Back
          </button>
          {disabled ? (
            <button
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => onEdit("username")}
            >
              Edit
            </button>
          ) : (
            <button
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => onSave("username")}
            >
              Save
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-center items-center w-11/12 h-[50px] rounded-md drop-shadow-lg my-3 absolute bottom-0 bg-inherit">
        <button
          className="w-3/12 h-[40px] flex justify-center items-center mx-1 shadow-sm"
          style={{
            color: adjustBrightness(colors.primary, -30),
          }}
          onClick={() => copyText("username")}
        >
          <BiUser size={40} />
        </button>
        <button
          className="w-3/12 h-[40px] flex justify-center items-center mx-1 shadow-sm"
          style={{
            color: adjustBrightness(colors.primary, -30),
          }}
          onClick={() => copyText("password")}
        >
          <BiKey size={40} />
        </button>
        <button
          className="w-3/12 h-[40px] flex justify-center items-center mx-1 shadow-sm"
          style={{
            color: adjustBrightness(colors.primary, -30),
          }}
          onClick={() => copyText("email")}
        >
          <FiMail size={40} />
        </button>
        <button
          className="w-3/12 h-[40px] flex justify-center items-center mx-1 shadow-sm"
          style={{
            color: adjustBrightness(colors.primary, -30),
          }}
          onClick={() => {
            window.open(document.getElementById("url").value, "_blank");
          }}
        >
          <GoArrowUpRight size={40} />
        </button>
        <button
          className="w-3/12 h-[40px] flex justify-center items-center mx-1 text-red-600 shadow-sm"
          onClick={() => onDelete()}
        >
          <MdDelete size={40} />
        </button>
      </div>
    </div>
  );
}
