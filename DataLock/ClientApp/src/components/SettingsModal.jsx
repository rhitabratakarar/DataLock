import { useContext, useEffect, useState } from "react";
import { AestheticContext, ColorContext } from "../contexts";
import getColorPallete from "../colorPalletePicker";

const SettingsModal = () => {
  const { colors, setColors } = useContext(ColorContext);
  const { aesthetic, setAesthetic } = useContext(AestheticContext);
  const [textCol, setTextCol] = useState("black");

  useEffect(() => {
    if (aesthetic === "dark") {
      setTextCol("white");
    } else if (aesthetic === "light") {
      setTextCol("black");
    } else {
      setTextCol(colors.tertiary);
    }
  }, [aesthetic]);

  return (
    <div className="w-full h-full">
      <div
        id="appearnce"
        className="flex flex-col justify-around w-full h-auto pt-8"
      >
        <span className="w-full h-10 ml-6 text-xl" style={{ color: textCol }}>
          Appearance:
        </span>
        <div className="flex flex-row justify-between w-full h-auto px-6 mt-3">
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={() => {
              setColors(getColorPallete("e3fdfdcbf1f5ffffff71c9ce"));
              setAesthetic("light");
            }}
          >
            Light
          </button>
          <button
            className="text-white bg-gray-700 hover:bg-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={() => {
              setColors(getColorPallete("1b262c0f4c7552616bbbe1fa"));
              setAesthetic("dark");
            }}
          >
            Dark
          </button>
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={() => {
              setAesthetic("custom");
            }}
          >
            Custom
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
