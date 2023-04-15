import React, { ChangeEvent, useRef } from "react";
import "./Contact.scss";
import ContactButton, { Props } from "./ContactButton";
import { motion } from 'framer-motion'


export default function Contact() {
    const links: Props[] = 
    [
        {
            text: "github.com/philip727",
            link: "https://github.com/philip727" ,
            imageSrc: "images/contact/github-green.svg",
        },
        {
            text: "hutchinson.philip02@gmail.com",
            link: "mailto:hutchinson.philip02@gmail.com" ,
            imageSrc: "images/contact/mail-green.svg",
        },
        {
            text: "Philip Hutchinson",
            link: "https://www.linkedin.com/in/philip-hutchinson-b232a0266/" ,
            imageSrc: "images/contact/linkedin-green.svg",
        },
    ]
    return (
        <div>
            <motion.div 
                className="flex flex-col items-center w-screen relative top-44"
                initial = {{ opacity: 0 }}
                whileInView = {{ opacity: 1}}
                viewport = {{ once: true }}
            >
                <h1 className="text-5xl gf:text-6xl mbp:text-7xl font-bold tracking-wide w-screen sm:w-fit px-8 sm:px-0 bright-text text-center">Contact Me!</h1>
                <p className="text-xl font-medium mt-4 w-screen sm:w-116 px-8 sm:px-0 text-center">
                    Looking for new opportunities, please get in touch! 
                    My inbox is always open and I will try to respond as fast as possible!
                </p>
            </motion.div>
            <div className="relative flex justify-center items-center flex-row sm:flex-col flex-wrap sm:flex-nowrap w-screen top-64 h-fit gap-6 pb-10">
                {links.map((item, index) => {
                    return <ContactButton text={item.text} link={item.link} imageSrc = {item.imageSrc} key={index} index={index} delayIndex={index} />
                })}
            </div>
        </div>
    )
}
