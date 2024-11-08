"use client"

import React, { useState, useEffect } from 'react'
import './navigation.scss'

import { MailOpen, FileUser, Github, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
   

function Page({theme}: {theme: string}) {
    const { setTheme } = useTheme()

    const redirect = (location: string) => {
        window.location.href = location
    }

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
                    <Button className="mx-2" variant="outline" onClick={() => redirect('https://github.com/SamuelHeal')}>
                        <Github />
                    </Button>
                    <Button className="mx-2" variant="outline" onClick={() => redirect('mailto:samuel.j.heal@gmail.com')}>
                        <MailOpen />
                    </Button>
                    <Button className="mx-2">
                        <FileUser />
                    </Button>
                    <Separator orientation="vertical" className='seperator'/>
                </div>
                <Button className="mx-2" variant="secondary" onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light")
                }}>
                    {theme === "light" ? <Moon className="h-[1.2rem] w-[1.2rem] hover:bg-tokyo-1"/> : <Sun className="h-[1.2rem] w-[1.2rem] hover:text-tokyo-1"/>}
                </Button>
            </div>
        </div>
        <div className="navigation-dock">
            <div className="sticky-container">

                <div className="sticky">
                    <a href='https://github.com/SamuelHeal' target='_blank' rel="noreferrer" className='socialIcon'>
                        <Button className="mx-1" variant="outline" onClick={() => redirect('https://github.com/SamuelHeal')}>
                            <Github />
                        </Button>
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100008027059320' target='_blank' rel="noreferrer" className='socialIcon seperator'>
                        <Button className="mx-1" variant="outline" onClick={() => redirect('mailto:samuel.j.heal@gmail.com')}>
                            <MailOpen />
                        </Button>
                    </a>
                    <a href='https://www.linkedin.com/in/samuel-heal-374b92204/' target='_blank' rel="noreferrer" className='socialIcon'>
                        <Button className="mx-1">
                            <FileUser />
                        </Button>
                    </a>
                    <a className='socialIcon'>
                        <Button className="mx-1" variant="secondary" onClick={() => {
                            setTheme(theme === "dark" ? "light" : "dark")
                        }}>
                            {theme === "light" ? <Moon className="h-[1.2rem] w-[1.2rem] hover:bg-tokyo-1"/> : <Sun className="h-[1.2rem] w-[1.2rem] hover:text-tokyo-1"/>}
                        </Button>
                    </a>
                    
                </div>

            </div>
        </div>
        </>
    )
}

export default Page