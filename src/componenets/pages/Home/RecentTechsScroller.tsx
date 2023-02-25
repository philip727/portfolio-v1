import React, { useRef } from "react";
import CarouselSlider from "../../layout/CarouselSlider/CarouselSlider";
import { motion } from "framer-motion";

const slideClass =
    "styled-border styled-background h-24 flex items-center justify-start p-3 w-56 rounded-2xl border-2 shopify-shadow";
const imgClass = "h-16 w-16 select-none";

const transition = {
    duration: 0.3,
};


const scrollerDiv = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

export default function RecentTechsScroller() {
    const scrollRef = useRef(null)
    return (
        <div ref={scrollRef}>
            <motion.div 
                variants={scrollerDiv}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={transition}
                className="flex items-end justify-center w-full h-56"
            >
                <CarouselSlider
                    id="carousel-languages-wrapper"
                    className="h-44 relative grid place-items-center overflow-hidden mask-grad after:contents[''] before:contents[''] before:transition-all 
                before:duration-300 after:transition-all after:duration-300 max-w-slider after:h-full before:h-full after:absolute before:absolute"
                    duration={20}
                    slides={[
                        {
                            name: "C#",
                            img: "/images/languages/csharp.svg",
                            sClassName: slideClass,
                            imgClass: imgClass,
                            tooltip: "My most used and favourite language",
                        },
                        {
                            name: "Python",
                            img: "/images/languages/python.svg",
                            sClassName: slideClass,
                            imgClass: imgClass,
                        },
                        {
                            name: "React",
                            img: "/images/languages/react.svg",
                            sClassName: slideClass,
                            imgClass: imgClass,
                        },
                        {
                            name: "Javascript",
                            img: "/images/languages/javascript.svg",
                            sClassName: slideClass,
                            imgClass: imgClass + " rounded-md",
                        },
                        {
                            name: "Typescript",
                            img: "/images/languages/typescript.svg",
                            sClassName: slideClass,
                            imgClass: imgClass + " rounded-md",
                        },
                        {
                            name: "Tailwind CSS",
                            img: "/images/languages/tailwindcss.svg",
                            sClassName: slideClass,
                            imgClass: imgClass,
                            tooltip: "The saviour of CSS",
                        },
                        {
                            name: "Unity",
                            img: "/images/languages/unity.svg",
                            sClassName: slideClass,
                            imgClass: imgClass,
                        },
                        {
                            name: "Sass",
                            img: "/images/languages/sass.svg",
                            sClassName: slideClass,
                            imgClass: imgClass,
                        },
                    ]}
                />
            </motion.div>
        </div>
    );
}
