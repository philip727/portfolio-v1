import { NavLink } from "react-router-dom";
import './Navbar.css'
import Typewriter from "../features/Typewriter";
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface Page {
    name: string;
    link: string;
}

interface NavbarProps {
    pages : Array<Page>
}

export default function Navbar(props: NavbarProps): JSX.Element {
    let navBarButtons: Array<JSX.Element> = []
    const [theme, setTheme]: [string, Dispatch<SetStateAction<string>>] = useState('light')

    // Creates a link with each page provided
    props.pages.forEach(page => {
        navBarButtons.push(createNavbarButton(page.name, page.link))
    })

    const toggleTheme = () => {
        if(theme == 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
        
    }
    
    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    return (
        <div id="navbar-wrapper">
            <div className="navbar-item" id="navbar-btn-wrapper" >
                <div id="theme-button" onClick={toggleTheme}>SWAP</div>
            </div>
            {/* <Typewriter childClass="navbar-item" childId="navbar-title" text="WEBSITE" msDelay={100} /> */}
            <h1 className="navbar-mid-item" id="navbar-title">WEBSITE</h1>
            <div className="navbar-item">
                <div id="navbar-link-wrapper">
                    {navBarButtons}
                </div>
            </div>
        </div>
    );
}

const createNavbarButton = (name: string, link: string): JSX.Element => {
    return <NavLink className="us-link hover-underline normal-txt" to={link}>{name}</NavLink>;
}