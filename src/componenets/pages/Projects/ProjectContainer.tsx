import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom'
import Tag from "../../extras/Tag";
import { Project } from "./Projects";

interface Props {
    project: Project;
    index: number;
}

export default function ProjectContainer({ project: { name, link, tags, id, description, image }, index }: Props): JSX.Element {
    const [isHovered, setIsHovered] = useState(false)
    const tooltipRef = useRef<HTMLDivElement>(null);

    const staggeredProject = {
        hidden: { y: 45, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: { 
                delay: 0.2 * (index + 1) 
            }
        },
        hover: {
            scale: 1.02,
            transition: { 
                duration: 0.1, 
                damping: 90, 
                stiffness: 150, 
                ease: "linear" ,
                delay: 0,
            } 
        },
        tap: { 
            scale: 0.98, 
            transition: { 
                duration: 0.05, 
                stiffness: 100, 
                ease: "easeIn",
                delay: 0,
            } 
        }
    }
    return (
        <AnimatePresence key={index}>
            <Link to={link ? link : "#"}>   
                <motion.div 
                    className="project-container h-96 w-90s md:w-112 rounded-lg material-shadow flex flex-col items-center select-none"
                    variants={staggeredProject}
                    initial="hidden"
                    whileInView="show"
                    exit="hidden"
                    whileHover="hover"
                    whileTap="tap"
                    onHoverStart={() => {
                        setIsHovered(true);
                    }}
                    onHoverEnd={() => {
                        setIsHovered(false);
                    }}
                    key={index}
                >
                    <div className="absolute bg-no-repeat bg-cover bg-center w-90s md:w-112 h-96 rounded-lg" style={{ backgroundImage:`url(${window.location.origin}${image})`}} />
                    <div className="flex flex-row justify-center items-center w-96p h-12 md:h-16 bg-no-repeat rounded-lg bg-cover bg-center top-2 md:top-3 relative material-shadow styled-border styled-background border-2">
                        <h2 className="font-medium text-xl md:text-2xl tracking-wider bright-text">{name}</h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0}}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        ref={tooltipRef}
                        className="break-words h-fit w-fit m-4 max-w-md absolute z-50 break-normal select-none top-24 px-4 py-4 styled-background-half rounded-2xl backdrop-blur-lg material-shadow"
                    >
                        <p
                            className="text-center"
                        >
                            {description}
                        </p>
                    </motion.div>
                    <div className="flex flex-col w-full h-4/5 mt-7 md:mt-4 justify-end items-start">
                        <div className="h-fit py-2 px-2 w-fit max-w-full flex-wrap-reverse styled-border styled-background border-2 relative rounded-lg mx-3 mb-2 flex flex-row-reverse items-start justify-end gap-3">
                            {tags.map((value, index) => {
                                return <Tag key={index} name={value} />
                            })}
                        </div>
                    </div>
                </motion.div>
            </Link>
        </AnimatePresence>
    );
}
