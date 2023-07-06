import CredentialSearch from "./CredentialSearch";
import { ColorContext } from "../contexts";
import { useState } from 'react';
import getColorPallete from "../colorPalletePicker";
import Credentials from "./Credentials";

export default function BrowserWindow() {
	const colorPallete = getColorPallete();
	// eslint-disable-next-line no-unused-vars
	const [colors, setColors] = useState(colorPallete);

	return (
		<ColorContext.Provider value={colors}>
		{(colors.hasOwnProperty("primary"))? (
			<div 
				className="flex flex-col h-screen w-screen justify-center items-center pb-3"
				style={{ backgroundColor: colors.tertiary }}
			>
				<CredentialSearch />
				<Credentials />
			</div>
		): (<></>)}
			
		</ColorContext.Provider>
	);
}