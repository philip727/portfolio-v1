import React from "react";
import "./ProjectContainer.scss";
import ProjectContainer from "./ProjectContainer";
import Tooltip from "../../features/Tooltip";

type Project = {
    name: string;
    id: number;
    description: string;
    image: string;
    tags: string[];
    link: string;
}

const ProjectsArray: Project[] = [
    {
        name: "Untitlted Survival Game",
        id: 1,
        description: "Top down 16-bit survival game",
        image: "/images/project/projects/world-gen-preview.png",
        tags: ["C#", "Unity"],
        link: "survival-game",
    },
];

export default function Projects() {
    return (
        <div className="flex flex-row justify-center items-start top-36 relative gap-6 md:gap-14 flex-wrap mx-2 md:mx-14 pb-6 md:pb-0">
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
                        link={project.link}
                    />
                </Tooltip>
            ))}
        </div>
    );
}
