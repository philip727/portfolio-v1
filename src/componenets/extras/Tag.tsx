import React from "react";
import './Tag.scss'

interface Props {
    name: string;
}

export default function Tag({ name }: Props) {
    let classToAdd = ""

    switch (name) { 
        case "C#":
            classToAdd = "csharp";
            break;
        case "SCSS":
            classToAdd = "sass";
            break;
        default:
            classToAdd = name.toLowerCase();
            break;
    }

    return <div className={`px-1 border-2 flex flex-row justify-center items-center rounded-md ${classToAdd}`}><p className="text-sm font-semibold">{name}</p></div>;
}
