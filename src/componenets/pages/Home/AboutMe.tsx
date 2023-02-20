import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence, useAnimation, AnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fallDistance: number = 60;
const transition = {
    type: "spring",
    damping: 12,
    stiffness: 90,
    duration: 0.3,
};

const leftLine = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -fallDistance, opacity: 0 },
};

const rightLine = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: fallDistance, opacity: 0 },
};

const middleText = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -fallDistance / 2, opacity: 0 },
};

const paraText = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -fallDistance, opacity: 0 },
};

export default function AboutMe() {
    const controls: AnimationControls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView]);

    return (
        <div className="h-full w-full flex justify-center items-center flex-col m-4">
            <AnimatePresence>
                {/* <div key={1} className="flex justify-center items-center gap-2 lg:gap-6 sm:gap-4">
                    <motion.span
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={leftLine}
                        transition={transition}
                        className="side-line h-0.5 w-16 bp:w-24 sm:w-34 md:w-40 lg:w-52 transition-colors duration-300"
                    />
                    <motion.h1
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={middleText}
                        transition={transition}
                        className="text-xl md:text-3xl lg:text-4xl font-bold"
                    >
                        ABOUT ME
                    </motion.h1>
                    <motion.span
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={rightLine}
                        transition={transition}
                        className="side-line h-0.5 w-16 bp:w-24 sm:w-34 md:w-40 lg:w-52 transition-colors duration-300"
                    />
                </div> */}
                <motion.p
                    ref={ref}
                    initial={"hidden"}
                    animate={controls}
                    variants={paraText}
                    transition={transition}
                    id="about-me-paragraph"
                    key={2}
                    className="text-center text-sm mp:text-base sm:text-lg md:text-xl lg:text-2xl mt-0 md:mt-1 font-medium w-3/4 2xl:w-1/2 3xl:w-1/3"
                >
                    Hi! I am Philip. A 20-year-old developer from the UK, I have been developing since 
                    I was 15-years-old, first starting with lua & python. Since then, I have
                    delved into many languages, and to this day I still enjoy making fun, interactive 
                    things with <NavLink id="code-write-link" className="hover-underline highlight-text font-semibold" to={"/projects"}>the code I write</NavLink>.
                </motion.p>
            </AnimatePresence>
        </div>
    );
}
