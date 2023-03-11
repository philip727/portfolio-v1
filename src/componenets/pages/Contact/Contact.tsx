import React, { ChangeEvent, useRef } from "react";
import "./Contact.scss";
import ContactButton, { Props } from "./ContactButton";


export default function Contact() {
    const links: Props[] = 
    [
        {
            text: "github.com/95827571",
            link: "https://github.com/95827571" ,
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
        <div className="flex justify-center items-center flex-col w-screen h-screen gap-6">
            {links.map((item, index) => {
                return <ContactButton text={item.text} link={item.link} imageSrc = {item.imageSrc} index={index} delayIndex={index} />
            })}
        </div>
    )
}
