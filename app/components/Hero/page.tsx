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

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Wow you are so cool!   ",
      style: { bold: false, italic: false, underline: false },
      colour: "tokyo-1",
      name: "John",
    },
    {
      id: 2,
      text: "Wow you are so cool!   ",
      style: { bold: false, italic: false, underline: false },
      colour: "tokyo-2",
      name: "John",
    },
    {
      id: 3,
      text: "Wow you are so cool!   ",
      style: { bold: false, italic: false, underline: false },
      colour: "tokyo-3",
      name: "John",
    },
  ]);

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
        <div className="layer">
          {/* {messages.map((message) => (
            <div key={message.id} className={classes(message)}>
              {message.text}
            </div>
          ))} */}
          <RandomTextDisplay initalItems={messages} />
        </div>
      </div>
      <div className="hero-text">
        <div className="hero-text-content">
          <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-9xl text-tokyo-1">
            Hello World, I'm <span className="text-tokyo-2">Sam</span>
          </h1>
          <h2 className="mt-6 text-3xl lg:text-6xl text-tokyo-3">
            I do software
          </h2>
        </div>
      </div>
      <div className="hero-image">
        {/* <div className="hero-image-content">
          <p>image here</p>
        </div> */}
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
                        onClick={() =>
                          setStyle({ ...style, bold: !style.bold })
                        }
                      >
                        <Bold className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="italic"
                        aria-label="Toggle italic"
                        onClick={() =>
                          setStyle({ ...style, italic: !style.italic })
                        }
                      >
                        <Italic className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="underline"
                        aria-label="Toggle underline"
                        onClick={() =>
                          setStyle({ ...style, underline: !style.underline })
                        }
                      >
                        <Underline className="h-4 w-4" />
                      </ToggleGroupItem>
                      <ToggleGroupItem
                        value="tokyo-1"
                        aria-label="Toggle colour"
                        className="bg-tokyo-1 hover:bg-tokyo-1/80"
                        data-state={colour === "tokyo-1" ? "on" : "off"}
                        onClick={() => setColour("tokyo-1")}
                      ></ToggleGroupItem>
                      <ToggleGroupItem
                        value="tokyo-2"
                        aria-label="Toggle colour"
                        className="bg-tokyo-2 hover:bg-tokyo-2/80"
                        data-state={colour === "tokyo-2" ? "on" : "off"}
                        onClick={() => setColour("tokyo-2")}
                      ></ToggleGroupItem>
                      <ToggleGroupItem
                        value="tokyo-3"
                        aria-label="Toggle colour"
                        className="bg-tokyo-3 hover:bg-tokyo-3/80"
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
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Page;
