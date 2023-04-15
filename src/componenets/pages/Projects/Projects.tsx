import React from "react";
import "./ProjectContainer.scss";
import ProjectContainer from "./ProjectContainer";

export type Project = {
    name: string;
    id: number;
    description: string;
    image: string;
    tags: string[];
    link?: string;
}

const ProjectsArray: Project[] = [
    {
        name: "Horizon's Edge",
        id: 1,
        description: "Top down 16-bit survival game passion project",
        image: "/images/projects/SurvivalGame/world-gen-preview.png",
        tags: ["C#", "Unity"],
    },
    {
        name: "CPJourney Create Account",
        id: 2,
        description: "Recreation of the original Club Penguin create account page for CPJourney (not in use yet)",
        image: "/images/projects/CPJourney-Create-Acc/create-acc-preview.png",
        tags: ["React", "Typescript", "Javascript", "PHP", "CSS", "SCSS", "Tailwind"],
        link: "https://play.cpjourney.net/create/",
    },
    {
        name: "Galaxy Forum",
        id: 3,
        description: "Full stack feature rich forum using React, Redux, NodeJS, Express, MySQL, written in TypeScript",
        image: "/images/projects/GalaxyForum/preview.png",
        tags: ["React", "Redux", "Node", "Express", "Typescript", "MySQL", "SCSS", "Tailwind"],
        link: "https://github.com/philip727/galaxy-themed-forum"
    }
];

export default function Projects() {
    return (
        <div className="flex flex-row justify-center items-start top-36 relative gap-6 md:gap-14 flex-wrap mx-2 md:mx-14 pb-6">
            {ProjectsArray.map((project, index) => (
                <ProjectContainer
                    project={project}
                    index={index}
                    key={index}
                />
            ))}
        </div>
    );
}
