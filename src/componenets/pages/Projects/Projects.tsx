import React from "react";
import "./ProjectContainer.scss";
import ProjectContainer from "./ProjectContainer";
import Tooltip from "../../features/Tooltip";

interface Project {
    name: string;
    id: number;
    description: string;
    image: string;
    tags: string[];
}

const ProjectsArray: Project[] = [
    {
        name: "Untitlted Survival Game",
        id: 1,
        description: "Top down 16-bit survival game",
        image: "./images/project/projects/world-gen-preview.png",
        tags: ["C#", "Unity"]
    },
];

export default function Projects() {
    return (
        <div className="flex flex-row justify-center items-start top-36 relative gap-6 md:gap-14 flex-wrap mx-2 md:mx-14 pb-6 md:pb-0">
            {/* <div className="project-container h-80 w-64 rounded-2xl project-container-border border-2 shopify-shadow flex flex-col">
                <div className="w-full h-2/5 bg-no-repeat rounded-t-2xl bg-cover bg-center" style={{backgroundImage: "url(./images/project/projects/world-gen-preview.png)"}}  />


            </div> */}
            {ProjectsArray.map((project, index) => (
                <Tooltip key={index} text={project.description}>
                    <ProjectContainer
                        name={project.name}
                        description={project.description}
                        id={project.id}
                        image={project.image}
                        key={index}
                        index={index}
                        tags={project.tags}
                    />
                </Tooltip>
            ))}
        </div>
    );
}
