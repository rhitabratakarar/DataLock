import { useContext } from "react";
import { ColorContext } from "../contexts";
import Credential from "./Credential";

export default function Credentials() {
	const colors = useContext(ColorContext);
	return (
		<div
			className="w-11/12 h-screen min-h-[100px] flex flex-col items-center pt-2 rounded-md overflow-scroll"
			style={{ backgroundColor: colors.primary }}
		>
			<Credential />
			<Credential />
			<Credential />
			<Credential />
			<Credential />
			<Credential />
			<Credential />
			<Credential />
			<Credential />
			<Credential />
			<Credential />
			<Credential />
			<Credential />
			<Credential />
			<Credential />
			<Credential />
			<Credential />
			<Credential />
			<Credential />
			<Credential />
			<Credential />
		</div>
	);
}