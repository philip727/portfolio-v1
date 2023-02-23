import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface Props {
    name: string;
    id: number;
    description: string;
    image: string;
    index: number;
}

const staggeredProject = {
    hidden: { y: 60, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
    }
}


export default function ProjectContainer({ name, id, description, image, index }: Props): JSX.Element {
    return (
        <AnimatePresence>
            <motion.div 
                className="project-container h-96 w-a-lot rounded-lg material-shadow flex flex-col items-center"
                variants={staggeredProject}
                initial="hidden"
                animate="show"
                transition={{delay: 0.1 * (index + 1)}}
                key={index}
            >
                <div className="absolute bg-no-repeat bg-cover bg-center w-a-lot h-96 rounded-lg grayscale hover:grayscale-0 transition-all duration-300" style={{ backgroundImage:`url(${image})`}} />
                <div className="flex flex-row justify-center items-center w-96p h-16 bg-no-repeat rounded-lg bg-cover bg-center top-3 relative material-shadow project-container border-2">
                    <h2 className="font-medium text-2xl tracking-wider bright-text">{name}</h2>
                </div>
                <div className="flex flex-col">
            
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
