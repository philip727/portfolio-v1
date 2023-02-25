import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link } from 'react-router-dom'
import Tag from "../../extras/Tag";

interface Props {
    name: string;
    id: number;
    description: string;
    image: string;
    index: number;
    tags: string[];
    link: string;
}

export default function ProjectContainer({ name, id, description, image, index, tags, link }: Props): JSX.Element {
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
            transition: { 
                duration: 0.3, 
                damping: 30, 
                stiffness: 100, 
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
            <Link to={link}>   
                <motion.div 
                    className="project-container h-96 w-a-lot rounded-lg material-shadow flex flex-col items-center"
                    variants={staggeredProject}
                    initial="hidden"
                    whileInView="show"
                    exit="hidden"
                    whileHover="hover"
                    whileTap="tap"
                    key={index}
                    >
                    <div key={0} className="absolute bg-no-repeat bg-cover bg-center w-a-lot h-96 rounded-lg" style={{ backgroundImage:`url(${window.location.origin}${image})`}} />
                    <div key={1} className="flex flex-row justify-center items-center w-96p h-12 md:h-16 bg-no-repeat rounded-lg bg-cover bg-center top-2 md:top-3 relative material-shadow project-container border-2">
                        <h2 className="font-medium text-2xl tracking-wider bright-text">{name}</h2>
                    </div>
                    <div key={2} className="flex flex-col w-full h-4/5 mt-4 justify-end items-start">
                        <div className="h-fit py-2 px-2 w-fit max-w-full flex-wrap-reverse project-container border-2 relative rounded-lg mx-3 mb-2 flex flex-row-reverse items-start justify-end gap-3">
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
