"use client"

import React, { useState } from 'react'
import './navigation.scss'

import { MailOpen, FileUser, Github, Moon, MoonIcon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
   

function ModeToggle({className}: {className: string}) {
    const { setTheme } = useTheme()
    const [isDark, setIsDark] = useState(true)
   
    return (
        <Button className={className} variant="secondary" onClick={() => {
            setIsDark(!isDark)
            setTheme(isDark ? "dark" : "light")
        }}>
            {isDark ? <Moon className="h-[1.2rem] w-[1.2rem]"/> : <Sun className="h-[1.2rem] w-[1.2rem]"/>}
        </Button>
    )
  }

function Page() {
    const redirect = (location: string) => {
        window.location.href = location
    }

    return (
        <>
        <div className="navigation border-b">
            <div className="navigation-logo">
                <code className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    S.Heal
                </code>
            </div>
            <div className="navigation-menu">
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
                <ModeToggle className='mx-2'/>
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
                        <ModeToggle className='mx-1'/>
                    </a>
                    
                </div>

            </div>
        </div>
        </>
    )
}

export default Page