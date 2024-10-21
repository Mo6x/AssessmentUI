import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import { ReactNode } from "react";


interface ColorContextProps {
  color: string;
  setColor: (newColor: string) => void;
}

const ColorContext = createContext<ColorContextProps | undefined>(undefined);

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};

export const ColorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [color, setColor] = useState<string>("#ffffff");

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};
