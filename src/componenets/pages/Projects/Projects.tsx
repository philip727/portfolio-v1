import React from "react";

class Project {
    name: string;
    id: number;
    description: string;
    image: string;

    constructor(name: string, id: number, description: string, image: string) {
        this.name = name;
        this.id = id;
        this.description = description;
        this.image = image;
    }
}
export default function Projects() {
    return (
        <div className="flex flex-row justify-center items-start top-72 relative gap-14 flex-wrap m-14">
            <div className="project-container h-80 w-64 rounded-2xl border-2 shopify-shadow flex flex-col">



            </div>
            <div className="project-container h-80 w-64 rounded-2xl border-2 shopify-shadow">


                
            </div>
            <div className="project-container h-80 w-64 rounded-2xl border-2 shopify-shadow">


                
            </div>
        </div>
    );
}
