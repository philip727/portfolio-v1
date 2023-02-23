import React from "react";
import "./ProjectContainer.scss";
import ProjectContainer from "./ProjectContainer";

interface Project {
    name: string;
    id: number;
    description: string;
    image: string;
    index: number;
}

const ProjectsArray = [
    {
        name: "Tanzia",
        id: 1,
        description: "Game made in C#",
        image: "./images/project/projects/world-gen-preview.png",
    },
    {
        name: "Untitled Game",
        id: 2,
        description: "Game made in C#",
        image: "./images/project/projects/world-gen-preview.png",
    },
];

export default function Projects() {
    return (
        <div className="flex flex-row justify-center items-start top-72 relative gap-14 flex-wrap mx-14">
            {/* <div className="project-container h-80 w-64 rounded-2xl project-container-border border-2 shopify-shadow flex flex-col">
                <div className="w-full h-2/5 bg-no-repeat rounded-t-2xl bg-cover bg-center" style={{backgroundImage: "url(./images/project/projects/world-gen-preview.png)"}}  />


            </div> */}
            {ProjectsArray.map((project, index) => (
                <ProjectContainer
                    name={project.name}
                    description={project.description}
                    id={project.id}
                    image={project.image}
                    key={index}
                    index={index}
                />
            ))}
        </div>
    );
}
