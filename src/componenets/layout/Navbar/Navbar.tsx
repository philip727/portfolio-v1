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
        <div id="navbar-wrapper" className="fixed flex justify-between items-center w-screen backdrop-blur-2xl z-50">
            <div className="w-1/3 h-full flex justify-start items-center" id="navbar-btn-wrapper">
                <ThemeButton />
            </div>
            {/* <Typewriter childClass="navbar-item" childId="navbar-title" text="WEBSITE" msDelay={100} /> */}
            <h1 className="navbar-mid-item" id="navbar-title">
                PHILIP
            </h1>
            <div className="w-1/3 h-full">
                <div id="navbar-link-wrapper" className="h-full flex flex-row justify-end items-center mr-9">
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
        <NavLink key={index} className="us-link hover-underline normal-txt text-center" to={link}>
            {name}
        </NavLink>
    );
};
