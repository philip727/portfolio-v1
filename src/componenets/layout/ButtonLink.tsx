import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
    className?: string;
    text: string;
    to: string;
}

export default function ButtonLink({ className, text, to}: Props): JSX.Element {
    return (
        <NavLink to={to}>
            <div className={className}>{text}</div>
        </NavLink>
    );
}
