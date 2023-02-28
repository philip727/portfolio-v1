import React from "react";
import "./ProjectContainer.scss";
import ProjectContainer from "./ProjectContainer";
import Tooltip from "../../extras/Tooltip";

export type Project = {
    name: string;
    id: number;
    description: string;
    image: string;
    tags: string[];
    link: string;
    directLink?: boolean
}

const ProjectsArray: Project[] = [
    {
        name: "Untitlted Survival Game",
        id: 1,
        description: "Top down 16-bit survival game",
        image: "/images/projects/SurvivalGame/world-gen-preview.png",
        tags: ["C#", "Unity"],
        link: "survival-game",
    },
    {
        name: "CPJourney Create Account",
        id: 2,
        description: "Recreation of the original Club Penguin create account page for CPJourney",
        image: "/images/projects/CPJourney-Create-Acc/create-acc-preview.png",
        tags: ["React", "Typescript", "Javascript", "PHP", "CSS", "SASS", "Tailwind"],
        link: "https://play.cpjourney.net/create/",
    },
];

export default function Projects() {
    return (
        <div className="flex flex-row justify-center items-start top-36 relative gap-6 md:gap-14 flex-wrap mx-2 md:mx-14 pb-6 md:pb-0">
            {ProjectsArray.map((project, index) => (
                <Tooltip key={index} text={project.description}>
                    <ProjectContainer
                        project={project}
                        index={index}
                    />
                </Tooltip>
            ))}
        </div>
    );
}
