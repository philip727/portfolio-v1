import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
    motion,
    AnimatePresence,
} from "framer-motion";

// Hi! I am Philip. A 20-year-old developer from the UK, I have been developing since
// I was 15-years-old, first starting with lua & python. Since then, I have
// delved into many languages, and to this day I still enjoy making fun, interactive
// things with

const transition = {
    type: "spring",
    damping: 12,
    stiffness: 90,
    duration: 0.3,
};

const hiText = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 60, opacity: 0 },
};

const nameText = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 90, opacity: 0 },
};

const paraText = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 120, opacity: 0 },
};

export default function Introduction() {
    const scrollRef = useRef(null)

    return (
        <div className="h-full w-full flex justify-start items-center flex-col">
            <div ref={scrollRef} className="max-w-slider w-full mt-56">
                <AnimatePresence>
                    <motion.h2 
                        variants={hiText}
                        initial="hidden"
                        whileInView="visible"
                        transition={transition}
                        viewport={{ once: true }}
                        key={1}
                        className="text-left text-3xl bp:text-4xl font-semibold w-full bright-text"
                    >
                        Hey There! 👋
                    </motion.h2>
                    <motion.h1
                        variants={nameText}
                        initial="hidden"
                        whileInView="visible"
                        transition={transition}
                        viewport={{ once: true }}
                        key={2}
                        className="text-6xl bp:text-7xl mt-2 font-bold w-full">
                        I'm Philip
                    </motion.h1>
                    <motion.p
                        variants={paraText}
                        initial="hidden"
                        whileInView="visible"
                        transition={transition}
                        viewport={{ once: true }}
                        id="about-me-paragraph"
                        key={3}
                        className="text-left text-3xl bp:text-4xl w-intro-text break-words mt-3"
                    >
                        I'm A 20 year-old developer from the UK with a passion
                        to write {" "}
                        <NavLink
                            id="code-write-link"
                            className="hover-underline highlight-text font-semibold"
                            to={"/projects"}
                        >
                            fun things
                        </NavLink> {" "}
                        with code.
                    </motion.p>
                </AnimatePresence>
            </div>
        </div>
    );
}
