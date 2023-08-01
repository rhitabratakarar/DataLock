import { useContext, useState } from "react";
import { ColorContext } from "../contexts";
import InfoContainer from "./InfoContainer";
import TextField from "./TextField";

export default function AddCredentialModal({
  viewCredentialList,
  showStatus,
  toggleCredentialListRefresh,
}) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [url, setURL] = useState("");
  const [notes, setNotes] = useState("");
  const colors = useContext(ColorContext);

  const onSave = () => {
    fetch("https://localhost:44414/api/credential/", {
      method: "POST",
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
    }).then((res) => {
      if (res.ok) {
        showStatus("Success");
        viewCredentialList();
        toggleCredentialListRefresh();
      } else showStatus("Error");
    });
  };

  return (
    <InfoContainer className="py-3">
      <div
        className="w-full h-full flex flex-col justify-start items-center py-2"
        style={{ backgroundColor: colors.tertiary }}
      >
        <div className="flex flex-col justify-start items-center overflow-y-scroll overflow-x-hidden w-full">
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id={"add-name"}
          />
          <TextField
            id="add-username"
            type="text"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="add-email"
            type="Email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="add-password"
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            id="add-url"
            type="url"
            label="Url"
            value={url}
            onChange={(e) => setURL(e.target.value)}
          />
          <div className="w-9/12 mb-3">
            <label
              htmlFor="add-notes"
              className="block text-lg font-medium leading-6 text-gray-900 mb-1"
            >
              About
            </label>
            <textarea
              id="add-notes"
              cols={20}
              rows={10}
              label="Notes"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="w-5/12 flex flex-row justify-between items-center h-[40px] rounded-md drop-shadow-lg mt-3">
          <button
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
            onClick={() => viewCredentialList()}
          >
            Cancel
          </button>
          <button
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => onSave()}
          >
            Submit
          </button>
        </div>
      </div>
    </InfoContainer>
  );
}
