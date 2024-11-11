import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { X, RefreshCcw } from "lucide-react";

interface Item {
  id: number;
  text: string;
  style: { bold: boolean; italic: boolean; underline: boolean };
  colour: string;
  name: string;
}

interface Position {
  x: number;
  y: number;
}

type TextSize =
  | "text-sm"
  | "text-md"
  | "text-lg"
  | "text-xl"
  | "text-2xl"
  | "text-3xl";

const RandomTextDisplay: React.FC<{
  initalItems: Item[];
  onReset: (resetFunc: () => void) => void;
  onMove: (moveFunc: () => void) => void;
}> = ({ initalItems, onReset, onMove }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [savedItems, setSavedItems] = useState<Item[]>([]);
  const [positions, setPositions] = useState<Record<number, Position>>({});
  const [textSizes, setTextSizes] = useState<Record<number, TextSize>>({});

  const resetFunctionRef = useRef<(() => void) | null>(null);
  const moveFunctionRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    setItems(initalItems);
    setSavedItems(initalItems);
    if (initalItems.length > 0) {
      setPositions(generatePositions(initalItems));
    }
  }, [initalItems]);

  // Generate random text size
  const getRandomTextSize = (): TextSize => {
    const sizes: TextSize[] = [
      "text-sm",
      "text-md",
      "text-lg",
      "text-xl",
      "text-2xl",
      "text-3xl",
    ];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  // Calculate the approximate size of a text element
  const getTextDimensions = (
    text: string,
    fontSize: TextSize
  ): { width: number; height: number } => {
    const baseSize: Record<TextSize, number> = {
      "text-sm":
        window.innerWidth < 768 ? 12 : window.innerWidth < 1024 ? 16 : 20,
      "text-md":
        window.innerWidth < 768 ? 20 : window.innerWidth < 1024 ? 26 : 32,
      "text-lg":
        window.innerWidth < 768 ? 28 : window.innerWidth < 1024 ? 36 : 44,
      "text-xl":
        window.innerWidth < 768 ? 36 : window.innerWidth < 1024 ? 46 : 56,
      "text-2xl":
        window.innerWidth < 768 ? 44 : window.innerWidth < 1024 ? 56 : 68,
      "text-3xl":
        window.innerWidth < 768 ? 52 : window.innerWidth < 1024 ? 66 : 80,
    };
    const size = baseSize[fontSize];
    return {
      width: text.length * (size * 0.6), // Approximate width based on character count
      height: size * 1.2, // Approximate height with some line height
    };
  };

  // Function to check for collisions
  const checkCollision = (
    newPos: Position,
    itemId: number,
    existingPositions: Record<number, Position>
  ): boolean => {
    const buffer = 20; // Minimum distance between elements
    const newItemDimensions = getTextDimensions(
      items.find((item) => item.id === itemId)?.text || "",
      textSizes[itemId] || "text-lg"
    );

    for (const [id, pos] of Object.entries(existingPositions)) {
      if (id === itemId.toString()) continue;

      const existingItemDimensions = getTextDimensions(
        items.find((item) => item.id === parseInt(id))?.text || "",
        textSizes[parseInt(id)] || "text-lg"
      );

      const xOverlap =
        Math.abs(newPos.x - pos.x) <
        (newItemDimensions.width + existingItemDimensions.width) / 2 + buffer;
      const yOverlap =
        Math.abs(newPos.y - pos.y) <
        (newItemDimensions.height + existingItemDimensions.height) / 2 + buffer;

      if (xOverlap && yOverlap) return true;
    }
    return false;
  };

  // Function to generate random positions
  const generatePositions = (
    currentItems: Item[]
  ): Record<number, Position> => {
    const newPositions: Record<number, Position> = {};
    const newTextSizes: Record<number, TextSize> = {};
    const containerWidth =
      window.innerWidth < 768
        ? window.innerWidth * 1.5 // 1.5 to ensure that the text is spread out across the screen
        : window.innerWidth * 1; // 1 to ensure that the text is spread out across the screen
    const containerHeight = window.innerHeight * 0.7; // 70% of viewport height to ensure padding

    (currentItems || []).forEach((item) => {
      const textSize = getRandomTextSize();
      newTextSizes[item.id] = textSize;

      const dimensions = getTextDimensions(item.text, textSize);
      let attempts = 0;
      let position: Position;

      do {
        position = {
          x: Math.random() * (containerWidth - dimensions.width),
          y: Math.random() * (containerHeight - dimensions.height),
        };
        attempts++;
      } while (
        checkCollision(position, item.id, newPositions) &&
        attempts < 100
      );

      newPositions[item.id] = position;
    });

    setTextSizes(newTextSizes);
    return newPositions;
  };

  const resetItems = () => {
    setItems(savedItems);
    localStorage.setItem("messages", JSON.stringify(savedItems));
  };

  // Add moveText to useCallback to maintain reference stability
  const moveText = useCallback(() => {
    if (items.length > 0) {
      setPositions(generatePositions(items));
    }
  }, [items]);

  // Update resize event listener with cleanup
  useEffect(() => {
    window.addEventListener("resize", moveText);
    return () => window.removeEventListener("resize", moveText);
  }, [moveText]); // Add moveText as dependency

  // Update reset function effect
  useEffect(() => {
    resetFunctionRef.current = resetItems;
    onReset(resetItems);
  }, [onReset, resetItems]); // Add onReset as dependency

  // Update move function effect
  useEffect(() => {
    moveFunctionRef.current = moveText;
    onMove(moveText);
  }, [onMove, moveText]); // Add onMove as dependency

  return (
    <div className="absolute top-0 left-0 h-[80vh] w-full overflow-hidden">
      {items?.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col absolute transition-all duration-500 ease-in-out text-${
            item.colour
          } font-${item.style.bold ? "bold" : "normal"} ${
            item.style.italic ? "italic" : "not-italic"
          } ${item.style.underline ? "underline" : "no-underline"} ${
            textSizes[item.id] || "text-lg"
          }`}
          style={{
            transform: `translate(${positions[item.id]?.x || 0}px, ${
              positions[item.id]?.y || 0
            }px)`,
          }}
        >
          {item.text}
          <span className="text-xs">- {item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default RandomTextDisplay;
