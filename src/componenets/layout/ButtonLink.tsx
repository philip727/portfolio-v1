import React from "react";
import { NavLink } from "react-router-dom";

interface ButtonLinkProps {
    buttonClass?: string;
    text: string;
    to: string;
}

export default function ButtonLink(props: ButtonLinkProps): JSX.Element {
    return (
        <NavLink to={props.to}>
            <div className={props.buttonClass}>{props.text}</div>
        </NavLink>
    );
}
