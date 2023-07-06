import CredentialSearch from "./CredentialSearch";
import { ColorContext } from "../contexts";
import { useContext } from 'react';
import Credentials from "./Credentials";
import PageFunctions from "./PageFunctions";

export default function BrowserWindow() {
	const colors = useContext(ColorContext);

	return (
		(colors.hasOwnProperty("primary"))? (
			<div 
				className="flex flex-col h-full w-screen justify-center items-center md:w-[700px]"
				style={{ backgroundColor: colors.tertiary }}
			>
				<CredentialSearch />
				<Credentials />
				<PageFunctions />
			</div>
		): (<></>)
	);
}