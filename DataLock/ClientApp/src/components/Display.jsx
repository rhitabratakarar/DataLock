import BrowserWindow from "./BrowserWindow";
import { useState, useMemo } from "react";
import { ColorContext, AestheticContext } from "../contexts";
import getColorPallete from "../colorPalletePicker";

export default function Display() {
  const colorPallete = getColorPallete();
  // eslint-disable-next-line no-unused-vars
  const [colors, setColors] = useState(colorPallete);
  const [aesthetic, setAesthetic] = useState("dark");
  const colorContextValue = useMemo(() => {
    return {
      colors,
      setColors,
    };
  }, [colors, setColors]);
  const aestheticContextValue = useMemo(() => {
    return {
      aesthetic,
      setAesthetic,
    };
  }, [aesthetic, setAesthetic]);
  return (
    <ColorContext.Provider value={colorContextValue}>
      <AestheticContext.Provider value={aestheticContextValue}>
        <div
          className="w-screen h-screen flex justify-center items-center font-sans"
          style={{ backgroundColor: colors.tertiary }}
        >
          <BrowserWindow />
        </div>
      </AestheticContext.Provider>
    </ColorContext.Provider>
  );
}
