import { useContext } from "react";
import { ColorContext } from "../contexts";

export default function Credential() {
	const colors = useContext(ColorContext);
	return (
		<div
			className="w-10/12 h-[48px] min-h-[48px] flex flex-col justify-center items-center my-2 rounded-md"
			style={{ backgroundColor: colors.quaternary }}
		>
		</div>
	);
}