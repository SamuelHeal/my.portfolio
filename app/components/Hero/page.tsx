import React, { useState } from "react";
import "./hero.scss";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Smile } from "lucide-react";

import RandomTextDisplay from "./Messages/page";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bold, Italic, Underline } from "lucide-react";

import {
  RegExpMatcher,
  TextCensor,
  englishDataset,
  englishRecommendedTransformers,
} from "obscenity";

function Page() {
  const censor = new TextCensor();
  const matcher = new RegExpMatcher({
    ...englishDataset.build(),
    ...englishRecommendedTransformers,
  });

  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("messages");
    return savedMessages
      ? JSON.parse(savedMessages)
      : [
          {
            id: 1,
            text: "Passionate!   ",
            style: { bold: false, italic: false, underline: false },
            colour: "tokyo-1",
            name: "Best Friend #1",
          },
          {
            id: 2,
            text: "A cool dude   ",
            style: { bold: false, italic: false, underline: false },
            colour: "tokyo-2",
            name: "Best Friend #2",
          },
          {
            id: 3,
            text: "A nerd beyond belief   ",
            style: { bold: false, italic: false, underline: false },
            colour: "tokyo-3",
            name: "My Girlfriend",
          },
          {
            id: 4,
            text: "Such a beautiful soul   ",
            style: { bold: false, italic: false, underline: false },
            colour: "tokyo-3",
            name: "My Mum",
          },
          {
            id: 5,
            text: "Incredibly talented!   ",
            style: { bold: false, italic: false, underline: false },
            colour: "tokyo-1",
            name: "Best Friend #3",
          },
          {
            id: 6,
            text: "Always inspiring others   ",
            style: { bold: false, italic: false, underline: false },
            colour: "tokyo-2",
            name: "Best Friend #4",
          },
          {
            id: 7,
            text: "Brilliantly creative   ",
            style: { bold: false, italic: false, underline: false },
            colour: "tokyo-3",
            name: "My Dad",
          },
          {
            id: 8,
            text: "Endlessly supportive   ",
            style: { bold: false, italic: false, underline: false },
            colour: "tokyo-3",
            name: "My Sister",
          },
        ];
  });

  localStorage.setItem("messages", JSON.stringify(messages));

  const [input, setInput] = useState("Wow you are so cool!");
  const [style, setStyle] = useState({
    bold: false,
    italic: false,
    underline: false,
  });
  const [colour, setColour] = useState("tokyo-1");
  const [name, setName] = useState("");

  function sendMessage({
    text,
    style,
    colour,
    name,
  }: {
    text: string;
    style: { bold: boolean; italic: boolean; underline: boolean };
    colour: string;
    name: string;
  }) {
    const matches = matcher.getAllMatches(text);
    const newInput = censor.applyTo(text, matches);
    const sendText = newInput + "   ";

    setMessages([
      ...messages,
      { id: messages.length + 1, text: sendText, style, colour, name },
    ]);
    localStorage.setItem("messages", JSON.stringify(messages));
  }

  const classes = (message: any) =>
    `w-full text-${message.colour} font-${
      message.style.bold ? "bold" : "normal"
    } ${message.style.italic ? "italic" : "not-italic"} ${
      message.style.underline ? "underline" : "no-underline"
    } text-3xl lg:text-6xl m-4`;

  return (
    <div className="hero">
      <div className="hero-background">
        <RandomTextDisplay initalItems={messages} />
      </div>
      <div className="hero-text">
        <div className="hero-text-content">
          <h1 className="scroll-m-20 font-extrabold tracking-tight text-7xl lg:text-9xl text-tokyo-1">
            Hello World,
          </h1>
          <h1 className="scroll-m-20 font-extrabold tracking-tight text-7xl lg:text-9xl text-tokyo-1">
            I'm <span className="text-tokyo-2">Sam</span>
          </h1>
          <h2 className="mt-6 text-5xl lg:text-6xl text-tokyo-3">
            I do software
          </h2>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-image-form">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Leave me a message!</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col justify-between w-full">
                    <ToggleGroup variant="outline" type="multiple">
                      <ToggleGroupItem
                        value="bold"
                        aria-label="Toggle bold"
                        className="data-[state=on]:border-heading hover:bg-heading hover:text-primary"
                        onClick={() =>
                          setStyle({ ...style, bold: !style.bold })
                        }
                      >
                        <Bold className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="italic"
                        aria-label="Toggle italic"
                        className="data-[state=on]:border-heading hover:bg-heading hover:text-primary"
                        onClick={() =>
                          setStyle({ ...style, italic: !style.italic })
                        }
                      >
                        <Italic className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="underline"
                        aria-label="Toggle underline"
                        className="data-[state=on]:border-heading hover:bg-heading hover:text-primary"
                        onClick={() =>
                          setStyle({ ...style, underline: !style.underline })
                        }
                      >
                        <Underline className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="tokyo-1"
                        aria-label="Toggle colour"
                        className="bg-tokyo-1 hover:bg-tokyo-1/80 data-[state=on]:bg-tokyo-1/80 data-[state=on]:border-heading"
                        data-state={colour === "tokyo-1" ? "on" : "off"}
                        onClick={() => setColour("tokyo-1")}
                      ></ToggleGroupItem>
                      <ToggleGroupItem
                        value="tokyo-2"
                        aria-label="Toggle colour"
                        className="bg-tokyo-2 hover:bg-tokyo-2/80 data-[state=on]:bg-tokyo-2/80 data-[state=on]:border-heading"
                        data-state={colour === "tokyo-2" ? "on" : "off"}
                        onClick={() => setColour("tokyo-2")}
                      ></ToggleGroupItem>
                      <ToggleGroupItem
                        value="tokyo-3"
                        aria-label="Toggle colour"
                        className="bg-tokyo-3 hover:bg-tokyo-3/80 data-[state=on]:bg-tokyo-3/80 data-[state=on]:border-heading"
                        data-state={colour === "tokyo-3" ? "on" : "off"}
                        onClick={() => setColour("tokyo-3")}
                      ></ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Input
                      id="message"
                      placeholder={input}
                      onChange={(e) => setInput(e.target.value)}
                      className={`${style.bold ? "bold" : ""} ${
                        style.italic ? "italic" : ""
                      } ${style.underline ? "underline" : ""} ${
                        colour ? `${colour}` : ""
                      }`}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Input
                      id="name"
                      placeholder="Your name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                disabled={!input || !name}
                onClick={() =>
                  sendMessage({ text: input, style, colour, name })
                }
              >
                Send
              </Button>
              <Popover>
                <PopoverTrigger>?</PopoverTrigger>
                <PopoverContent>
                  To prevent spam flooding my page, your message will first be
                  saved in your browser's local storage, and will be included in
                  the site's database after I have read it myself. Profanity
                  will be either automatically or manually censored.
                </PopoverContent>
              </Popover>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Page;
