import CredentialSearch from "./CredentialSearch";
import { ColorContext } from "../contexts";
import { useContext, useState } from 'react';
import Credentials from "./Credentials";
import PageFunctions from "./PageFunctions";
import CredentialModal from "./CredentialModal";

export default function BrowserWindow() {
	const [transition, setTransition] = useState("right-[100vw]");
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
		setTransition("right-0");
	};

	const viewCredentialList = () => {
		setTransition("right-[100vw]");
		// setHidden((prev) => !prev);
		// setCname("left-[100vw]")
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
				<div className="relative">
					
						<div
							className={`flex flex-col h-[calc(100vh-130px)] h-min-[calc(100vh-130px)] w-screen justify-center items-center md:w-[700px] relative -top-[calc(100vh-65px)] py-3 z-auto transition-all duration-300 ease-in-out ${transition}`}
							style={{ backgroundColor: colors.tertiary }}
							// hidden={hidden}
							// key={hidden}
						>
							<CredentialModal viewCredentialList={viewCredentialList} credentialData={credentialData} />
						</div>


					<div
						className={`flex flex-col h-[calc(100vh-130px)] h-min-[calc(100vh-130px)] w-screen justify-center items-center md:w-[700px] relative -top-[calc(200vh-195px)] py-3 right-[100vw] transition-all duration-500 ease-linear z-auto`}
						style={{ backgroundColor: colors.tertiary }}
					>
					</div>
				</div>
			</div>
		) : (<></>)
	);
}