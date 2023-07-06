import Credentials from "./Credentials";
import PageFunctions from "./PageFunctions";
import CredentialSearch from "./CredentialSearch";

export default function BrowserWindow() {
	return (
		<div className="flex flex-col h-screen bg-zinc-700 w-screen">
			<CredentialSearch />
			{/* <Credentials />
			<PageFunctions /> */}
		</div>
	);
}