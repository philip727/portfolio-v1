import React from "react";
import { motion } from "framer-motion";

export interface Props {
    imageSrc: string;
    link: string;
    text: string;
    index?: number;
    delayIndex?: number
}

export default function ContactButton({ imageSrc, link, text, index, delayIndex=1 }: Props) {
    const animation = {
        hidden: {
            x: -45, opacity: 0,
        },
        show: {
            x: 0, opacity: 1,
            transition: {
                delay: 0.2 * delayIndex
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
        <a href={link} target="_blank" key={index}>
            <motion.div 
                className="w-24 sm:w-120 h-24 rounded-xl styled-background shopify-shadow border-2 styled-border flex justify-center sm:justify-start items-center"
                variants={animation}
                initial="hidden"
                whileInView="show"
                exit="hidden"
                whileHover="hover"
                whileTap="tap"
                viewport={{once: true}}
            >
                <img
                    src={`${window.location.origin}/${imageSrc}`}
                    className="h-16 w-16 ml-0 sm:ml-3 shopify-shadow"
                />
                <h1 className="text-3xl ml-4 hidden sm:block">{text}</h1>
            </motion.div>
        </a>
    );
}
