import React, { createContext, useContext, useState } from "react";

interface CursorPosition {
  x: number;
  y: number;
  isHovering: boolean;
}

interface CursorContextType {
  position: CursorPosition;
  setPosition: React.Dispatch<React.SetStateAction<CursorPosition>>;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export default function CursorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [position, setPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
    isHovering: false,
  });

  return (
    <CursorContext.Provider value={{ position, setPosition }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
}
