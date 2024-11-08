import React, { useState, useEffect } from "react";

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
  | "text-lg"
  | "text-xl"
  | "text-2xl"
  | "text-3xl"
  | "text-4xl"
  | "text-5xl";

const RandomTextDisplay: React.FC<{ initalItems: Item[] }> = ({
  initalItems,
}) => {
  // Sample initial data

  useEffect(() => {
    setItems(initalItems);
  }, [initalItems]);

  const [items, setItems] = useState<Item[]>(initalItems);
  const [positions, setPositions] = useState<Record<number, Position>>({});
  const [textSizes, setTextSizes] = useState<Record<number, TextSize>>({});

  // Generate random text size
  const getRandomTextSize = (): TextSize => {
    const sizes: TextSize[] = [
      "text-lg",
      "text-xl",
      "text-2xl",
      "text-3xl",
      "text-4xl",
      "text-5xl",
    ];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  // Calculate the approximate size of a text element
  const getTextDimensions = (
    text: string,
    fontSize: TextSize
  ): { width: number; height: number } => {
    const baseSize: Record<TextSize, number> = {
      "text-lg": 20,
      "text-xl": 24,
      "text-2xl": 30,
      "text-3xl": 36,
      "text-4xl": 48,
      "text-5xl": 60,
    };
    const size = baseSize[fontSize] || 24;
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
    const containerWidth = window.innerWidth * 0.9; // 90% of viewport width to ensure padding
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

  // Update positions when items change
  useEffect(() => {
    setPositions(generatePositions(items));
  }, [items]);

  // Function to add new item
  const addNewItem = (item: Item) => {
    const newItem: Item = {
      id: items.length + 1,
      text: item.text,
      style: item.style,
      colour: item.colour,
      name: item.name,
    };
    setItems([...items, newItem]);
  };

  return (
    <div className="absolute top-0 left-0 h-[80vh] w-screen overflow-hidden p-8">
      {items?.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col absolute transition-all duration-500 ease-in-out cursor-pointer hover:scale-110 text-${
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
