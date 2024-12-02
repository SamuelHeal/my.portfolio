"use client";

import React, { useState, useEffect, useRef } from "react";
import "./navigation.css";
import { MailOpen, FileUser, Github, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function Page({ theme }: { theme: string }) {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({
    x: 20,
    y: window.innerHeight - 100,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);

  const redirect = (location: string) => {
    window.location.href = location;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;

      // Keep the button within the viewport
      const maxX = window.innerWidth - 60;
      const maxY = window.innerHeight - 60;

      setPosition({
        x: Math.min(Math.max(0, newX), maxX),
        y: Math.min(Math.max(0, newY), maxY),
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navigation border-b">
        <div className="navigation-logo">
          <h1
            className="scroll-m-20 text-4xl text-heading font-extrabold tracking-tight lg:text-5xl text-tokyo-1"
            data-hoverable="true"
          >
            SH
          </h1>
        </div>
        <div className="navigation-menu">
          <p className="mx-2">+61 414 015 876</p>
          <div className="navigation-menu-icons">
            <Button
              className="dock-btn mx-2 hover:bg-tokyo-1"
              variant="outline"
              onClick={() => redirect("https://github.com/SamuelHeal")}
              data-hoverable="true"
            >
              <Github />
            </Button>
            <Button
              className="dock-btn mx-2 hover:bg-tokyo-1"
              variant="outline"
              onClick={() => redirect("mailto:samuel.j.heal@gmail.com")}
              data-hoverable="true"
            >
              <MailOpen />
            </Button>
            <Button
              variant="outline"
              className="dock-btn mx-2 hover:bg-tokyo-1"
              data-hoverable="true"
            >
              <FileUser />
            </Button>
            <Separator orientation="vertical" className="seperator" />
          </div>
          <Button
            className="mx-2 hover:bg-tokyo-3"
            variant="secondary"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
            data-hoverable="true"
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
        <div
          className="floating-nav"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
          ref={menuRef}
        >
          <button
            className={`nav-toggle ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
            onMouseDown={handleMouseDown}
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          {isOpen && (
            <div className="circular-menu">
              <Button
                className="menu-item github"
                variant="outline"
                onClick={() => redirect("https://github.com/SamuelHeal")}
                data-hoverable="true"
              >
                <Github />
              </Button>
              <Button
                className="menu-item mail"
                variant="outline"
                onClick={() => redirect("mailto:samuel.j.heal@gmail.com")}
                data-hoverable="true"
              >
                <MailOpen />
              </Button>
              <Button
                className="menu-item resume"
                variant="outline"
                onClick={() => redirect("/resume")}
                data-hoverable="true"
              >
                <FileUser />
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Page;
