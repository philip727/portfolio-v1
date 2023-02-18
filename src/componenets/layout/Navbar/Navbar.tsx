import { NavLink } from "react-router-dom";
import "./Navbar.css";
import React from "react";
import ThemeButton from "./ThemeButton";

interface Page {
    name: string;
    link: string;
}

interface NavbarProps {
    pages: Array<Page>;
}

export default function Navbar(props: NavbarProps): JSX.Element {
    return (
        <div id="navbar-wrapper">
            <div className="navbar-item" id="navbar-btn-wrapper">
                <ThemeButton />
            </div>
            {/* <Typewriter childClass="navbar-item" childId="navbar-title" text="WEBSITE" msDelay={100} /> */}
            <h1 className="navbar-mid-item" id="navbar-title">
                PHILIP
            </h1>
            <div className="navbar-item">
                <div id="navbar-link-wrapper">
                    {props.pages.map((page, index) => {
                        return (createNavbarButton(page.name, page.link, index));
                    })}
                </div>
            </div>
        </div>
    );
}

const createNavbarButton = (name: string, link: string, index: number): JSX.Element => {
    return (
        <NavLink key={index} className="us-link hover-underline normal-txt" to={link}>
            {name}
        </NavLink>
    );
};
