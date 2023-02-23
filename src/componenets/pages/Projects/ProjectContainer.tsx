import React from "react";

interface Props {
    name: string;
    id: number;
    description: string;
    image: string;
}

export default function ProjectContainer({ name, id, description, image }: Props): JSX.Element {
    return (
        <div className="project-container h-96 w-a-lot rounded-lg material-shadow flex flex-col items-center"
        >
            <div className="absolute bg-no-repeat bg-cover bg-center w-a-lot h-96 rounded-lg grayscale hover:grayscale-0 transition-all duration-300" style={{ backgroundImage:`url(${image})`}} />
            <div className="flex flex-row justify-center items-center w-96p h-16 bg-no-repeat rounded-lg bg-cover bg-center top-3 relative material-shadow project-container border-2">
                <h2 className="font-medium text-2xl tracking-wider bright-text">{name}</h2>
            </div>
            <div className="flex flex-col">
        
            </div>
        </div>
    );
}
