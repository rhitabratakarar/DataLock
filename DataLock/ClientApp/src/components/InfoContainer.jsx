import { useContext } from "react";
import { ColorContext } from "../contexts";

export default function InfoContainer({children, className=''}) {
	const colors = useContext(ColorContext);
	return (
		<div
			className={`w-11/12 h-screen min-h-[100px] flex flex-col items-center rounded-md overflow-y-scroll ${className}`}
			style={{ backgroundColor: colors.primary }}
		>
			{children}
		</div>
	);
}