import TopOverlay from "./CredentialSearch";
import { ColorContext } from "../contexts";
import { useContext, useState } from 'react';
import Credentials from "./Credentials";
import PageFunctions from "./PageFunctions";
import CredentialModal from "./CredentialModal";
import AddCredentialModal from "./AddCredentialModal";
import SettingsModal from "./SettingsModal";
import LogoAndSearch from "./LogoAndSearch";

export default function BrowserWindow() {
	const [credentialModalTransition, setCredentialModalTransition] = useState("opacity-0 right-[100vw]");
	const [addCredentialModalTransition, setAddCredentialModalTransition] = useState("opacity-0 right-[100vw]");
	const [settingsModalTransition, setSettingsModalTransition] = useState("opacity-0 right-[100vw]");
	const [refresh, setRefresh] = useState(0);
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
		setCredentialModalTransition("opacity-100 right-0");
	};

	const viewAddCredentialModal = () => {
		setAddCredentialModalTransition("opacity-100 right-0");
	};

	const viewSettingsModal = () => {
		setSettingsModalTransition("opacity-100 right-0");
	};

	const viewCredentialList = () => {
		setCredentialModalTransition("opacity-0 right-[100vw]");
		setAddCredentialModalTransition("opacity-0 right-[100vw]");
		setSettingsModalTransition("opacity-0 right-[100vw]");
	};

	const passCredentialData = (data) => {
		setCredentialData(data);
	};

	const refreshCredentialModal = () => {
		setRefresh((prev) => (prev + 1) % 2);
	}

	return (
		(colors.hasOwnProperty("primary")) ? (
			<div className="flex flex-col items-center h-screen min-h-screen overflow-hidden">
				<div
					className="flex flex-col h-full w-screen justify-center items-center md:w-[700px] relative"
					style={{ backgroundColor: colors.tertiary }}
				>
					<LogoAndSearch/>
					<TopOverlay />
					<Credentials
						viewCredentialModal={viewCredentialModal}
						passCredentialData={passCredentialData}
						refreshCredentialModal={refreshCredentialModal}
					/>
					<PageFunctions
						viewAddCredentialModal={viewAddCredentialModal} 
						viewSettingsModal={viewSettingsModal} 
						viewCredentialList={viewCredentialList}
					/>
				</div>
				<div className="relative">
					<div
						className={`flex flex-col h-[calc(100vh-130px)] h-min-[calc(100vh-130px)] w-screen justify-center items-center md:w-[700px] relative -top-[calc(100vh-65px)] py-3 z-auto transition-all duration-300 ease-in-out ${credentialModalTransition}`}
						style={{ backgroundColor: colors.tertiary }}
					>
						<CredentialModal viewCredentialList={viewCredentialList} credentialData={credentialData} key={refresh} />
					</div>
					<div
						className={`flex flex-col h-[calc(100vh-130px)] h-min-[calc(100vh-130px)] w-screen justify-center items-center md:w-[700px] relative -top-[calc(200vh-195px)] py-3 transition-all duration-300 ease-in-out z-auto ${addCredentialModalTransition}`}
						style={{ backgroundColor: colors.tertiary }}
					>
						<AddCredentialModal viewCredentialList={viewCredentialList} />
					</div>
					<div
						className={`flex flex-col h-[calc(100vh-130px)] h-min-[calc(100vh-130px)] w-screen justify-center items-center md:w-[700px] relative -top-[calc(300vh-325px)] py-3 transition-all duration-300 ease-in-out z-auto ${settingsModalTransition}`}
						style={{ backgroundColor: colors.tertiary }}
					>
						<SettingsModal viewCredentialList={viewCredentialList} />
					</div>
				</div>
			</div>
		) : (<></>)
	);
}