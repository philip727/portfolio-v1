import { NavLink } from "react-router-dom";
import './Navbar.css'
import Typewriter from "../features/Typewriter";

export default function Navbar(props) {
    let navBarButtons = []

    // Creates each of the navbar links provided
    props.pages.forEach(page => {
        navBarButtons.push(createNavbarButton(page.name, page.link))
    })

    return (
        <div id="navbar-wrapper">
            <div className="invis navbar-item"></div>
            <Typewriter className="navbar-item" id="navbar-title" text="WEBSITE" msDelay={100} tag="h1" />
            <div className="navbar-item">
                <div id="navbar-link-wrapper">
                    {navBarButtons}
                </div>
            </div>
        </div>
    );
}

const createNavbarButton = (name, link) => {
    return <NavLink className="us-link hover-underline normal-txt" to={link}>{name}</NavLink>;
}