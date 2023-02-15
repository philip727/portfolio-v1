import { NavLink } from "react-router-dom";
import './Navbar.css'
import Typewriter from "../features/Typewriter";
import React from 'react'

interface Page {
    name: string;
    link: string;
}

interface NavbarProps {
    pages : Array<Page>
}

export default function Navbar(props: NavbarProps): JSX.Element {
    let navBarButtons: Array<JSX.Element> = []

    // Creates each of the navbar links provided
    props.pages.forEach(page => {
        navBarButtons.push(createNavbarButton(page.name, page.link))
    })

    return (
        <div id="navbar-wrapper">
            <div className="invis navbar-item"></div>
            <Typewriter childClass="navbar-item" childId="navbar-title" text="WEBSITE" msDelay={100} />
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