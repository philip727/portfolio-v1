import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from "react-router-dom"


export default function RootLayout() {
  return (
    <div className="root-layout">
        <header>
            <Navbar pages={[
                {
                    name: "Home", 
                    link: "/"
                },
                {
                    name: "About Me",
                    link: "/about"
                },
                {
                    name: "Projects",
                    link: "/projects"
                },
                {
                    name: "Blog",
                    link: "/blog"
                },
                {
                    name: "Contact",
                    link: "/contact"
                },
            ]} />
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}
