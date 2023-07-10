import CredentialSearch from "./CredentialSearch";
import { ColorContext } from "../contexts";
import { useContext, useState } from 'react';
import Credentials from "./Credentials";
import PageFunctions from "./PageFunctions";
import CredentialModal from "./CredentialModal";

export default function BrowserWindow() {
	const [hidden, setHidden] = useState(true);
	const [credentialData, setCredentialData] = useState({
		name: "",
		username: "",
		email: "",
		password: "",
		url: "",
		notes: "",
	});
	const colors = useContext(ColorContext);

	const viewCredentialModal = () => {
		setHidden(false);
	};

	const viewCredentialList = () => {
		setHidden(true);
	};

	const passCredentialData = (data) => {
		setCredentialData(data);
	};

	return (
		(colors.hasOwnProperty("primary")) ? (
			<div className="flex flex-col items-center h-screen min-h-screen overflow-hidden">
				<div
					className="flex flex-col h-full w-screen justify-center items-center md:w-[700px]"
					style={{ backgroundColor: colors.tertiary }}
				>
					<CredentialSearch />
					<Credentials viewCredentialModal={viewCredentialModal} passCredentialData={passCredentialData} />
					<PageFunctions />
				</div>
				<div
					className="flex flex-col h-[calc(100vh-130px)] h-min-[calc(100vh-130px)] w-screen justify-center items-center md:w-[700px] relative -top-[calc(100vh-65px)] py-3"
					style={{ backgroundColor: colors.tertiary }}
					hidden={hidden}
				>
					<CredentialModal viewCredentialList={viewCredentialList} credentialData={credentialData} />
				</div>
			</div>
		) : (<></>)
	);
}