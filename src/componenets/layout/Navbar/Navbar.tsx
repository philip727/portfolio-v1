import { NavLink } from "react-router-dom";
import "./Navbar.css";
import React from "react";
import ThemeButton from "./ThemeButton/ThemeButton";

type Page = {
    name: string;
    link: string;
}

interface Props {
    pages: Page[];
}

export default function Navbar({ pages }: Props): JSX.Element {
    return (
        <div
            id="navbar-wrapper"
            className="fixed flex gap-0 justify-between items-center w-screen backdrop-blur-2xl z-50 material-shadow h-12 sm:h-16"
        >
            <div
                className="w-1/3 h-full flex justify-start items-center"
                id="navbar-btn-wrapper"
            >

            </div>
            <h1
                className="text-center h-fit font-semibold text-4xl flex justify-center items-center tracking-wider w-1/3"
                id="navbar-title"
            >
                PHILIP
            </h1>
            <div className="w-1/3 h-full">
                <div
                    id="navbar-link-wrapper"
                    className="h-full flex flex-row justify-center items-center gap-3 2xl:gap-7 mr-9 invisible xl:visible w-full"
                >
                    {pages.map((page, index) => {
                        return createNavbarButton(page.name, page.link, index);
                    })}
                </div>
            </div>
        </div>
    );
}

const createNavbarButton = (name: string,link: string,index: number): JSX.Element => {
    return (
        <NavLink
            key={index}
            className="us-link hover-underline normal-txt text-center text-xl"
            to={link}
        >
            {name}
        </NavLink>
    );
};
