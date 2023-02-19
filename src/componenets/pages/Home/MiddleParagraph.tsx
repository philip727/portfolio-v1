import React, { useEffect } from "react";
import { motion, AnimatePresence, useAnimation, AnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fallDistance: number = 60;
const transition = {
    type: "spring",
    damping: 12,
    stiffness: 90,
    duration: 0.2,
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

export default function MiddleParagraph() {
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
                <div key={1} className="flex justify-center items-center gap-2 lg:gap-6 sm:gap-4">
                    <motion.span
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={leftLine}
                        transition={transition}
                        className="side-line h-px sm:h-0.5 mp:w-24 bp:w-32 sm:w-40 md:w-48 lg:w-52 transition-colors duration-300"
                    />
                    <motion.h1
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={middleText}
                        transition={transition}
                        className="sm:text-xl md:text-3xl lg:text-4xl text-lg font-bold"
                    >
                        ABOUT ME
                    </motion.h1>
                    <motion.span
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={rightLine}
                        transition={transition}
                        className="side-line h-px sm:h-0.5 mp:w-24 bp:w-32 sm:w-40 md:w-48 lg:w-52 transition-colors duration-300"
                    />
                </div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    id="about-me-paragraph"
                    key={2}
                    className="text-center text-xs bp:text-sm sm:text-lg md:text-xl lg:text-2xl mt-0 md:mt-1 font-medium"
                >
                    Hello! My name is Philip and I am a 20 year old developer!
                    <br />
                    I have been programming since 2016 and have developed
                    <br />
                    almost daily since, and still love programming even more
                    <br />
                    every day.
                </motion.p>
            </AnimatePresence>
        </div>
    );
}
