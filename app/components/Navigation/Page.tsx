"use client";

import React, { useState, useEffect } from "react";
import "./navigation.scss";

import { MailOpen, FileUser, Github, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function Page({ theme }: { theme: string }) {
  const { setTheme } = useTheme();

  const redirect = (location: string) => {
    window.location.href = location;
  };

  return (
    <>
      <div className="navigation border-b">
        <div className="navigation-logo">
          <h1 className="scroll-m-20 text-4xl text-heading font-extrabold tracking-tight lg:text-5xl">
            S.Heal
          </h1>
        </div>
        <div className="navigation-menu">
          <p className="mx-2">+61 414 015 876</p>
          <div className="navigation-menu-icons">
            <Button
              className="mx-2"
              variant="outline"
              onClick={() => redirect("https://github.com/SamuelHeal")}
            >
              <Github />
            </Button>
            <Button
              className="mx-2 hover:bg-tokyo-2"
              variant="outline"
              onClick={() => redirect("mailto:samuel.j.heal@gmail.com")}
            >
              <MailOpen />
            </Button>
            <Button className="mx-2">
              <FileUser />
            </Button>
            <Separator orientation="vertical" className="seperator" />
          </div>
          <Button
            className="mx-2"
            variant="secondary"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            {theme === "light" ? (
              <Moon className="h-[1.2rem] w-[1.2rem] hover:bg-tokyo-1" />
            ) : (
              <Sun className="h-[1.2rem] w-[1.2rem] hover:text-tokyo-1" />
            )}
          </Button>
        </div>
      </div>
      <div className="navigation-dock">
        <div className="sticky-container">
          <div className="sticky">
            <Button
              className="mx-2 my-4"
              variant="outline"
              onClick={() => redirect("https://github.com/SamuelHeal")}
            >
              <Github />
            </Button>
            <Button
              className="mx-2 my-4 hover:bg-tokyo-2"
              variant="outline"
              onClick={() => redirect("mailto:samuel.j.heal@gmail.com")}
            >
              <MailOpen />
            </Button>
            <Button className="mx-2 my-4">
              <FileUser />
            </Button>
            <Button
              className="mx-2 my-4"
              variant="secondary"
              onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
              }}
            >
              {theme === "light" ? (
                <Moon className="h-[1.2rem] w-[1.2rem] hover:bg-tokyo-1" />
              ) : (
                <Sun className="h-[1.2rem] w-[1.2rem] hover:text-tokyo-1" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
