import BrowserWindow from "./BrowserWindow";
import { useState } from "react";
import { ColorContext } from "../contexts";
import getColorPallete from "../colorPalletePicker";

export default function Display() {
  	const colorPallete = getColorPallete();
    // eslint-disable-next-line no-unused-vars
    const [colors, setColors] = useState(colorPallete);
    return (
      <ColorContext.Provider value={colors}>
      <div className="w-screen h-screen flex justify-center items-center" style={{ backgroundColor: colors.tertiary }}>
        <BrowserWindow />
      </div>
      </ColorContext.Provider>
    );
}