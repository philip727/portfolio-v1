import React from "react";
import './Tag.scss'

interface Props {
    name: string;
}

export default function Tag({ name }: Props) {
    let classToAdd = ""

    switch (name) { 
        case "Unity":
            classToAdd = "unity";
            break;
        case "C#":
            classToAdd = "csharp";
            break;
        case "Tailwind":
            classToAdd = "tailwind";
            break;
    }

    return <div className={`px-1 border-2 flex flex-row justify-center items-center rounded-md ${classToAdd}`}><p className="text-sm">{name}</p></div>;
}
