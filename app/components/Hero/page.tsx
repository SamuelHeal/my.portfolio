import React, { useState } from 'react'
import CodeMirror from "@uiw/react-codemirror";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import { tokyoNightDay } from "@uiw/codemirror-theme-tokyo-night-day";
import './hero.scss'

function Page() {
    return (
        <div className="hero">
            <div className="hero-text">
                <div className="hero-text-content">
                    <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-9xl text-tokyo-1">Hello World, I'm <span className="text-tokyo-2">Sam</span></h1>
                    <h2 className="mt-6 text-3xl lg:text-6xl text-tokyo-3">I do software</h2>
                </div>
            </div>
            <div className="hero-image">
                <h1>image here</h1>
            </div>
        </div>
    )
}

export default Page