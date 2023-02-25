import React, { useRef } from "react";
import { AnimatePresence, motion, } from "framer-motion";

const transition = {
    type: "spring",
    damping: 12,
    stiffness: 90,
    duration: 0.3,
};

const slideIn = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
}

export default function RecentTechsTitle() {
    const scrollRef = useRef(null)
    return (
        <div className="flex justify-center items-center">
            <div
                ref={scrollRef} 
                className="flex justify-center items-end w-full max-w-slider flex-col"
            >
                <AnimatePresence>
                    <motion.h1
                        variants={slideIn}
                        initial="hidden"
                        whileInView="visible"
                        transition={transition}
                        viewport={{ once: true }}
                        key={0}
                        className="font-bold text-right text-5xl">RECENT TECHS
                    </motion.h1>
                    <motion.p 
                        variants={ {...slideIn, hidden: { x: -120, opacity: 0 } }}
                        initial="hidden"
                        whileInView="visible"
                        transition={transition}
                        viewport={{ once: true }}
                        key={1}
                        className="text-right font-light text-lg"
                    >
                        These are the frameworks, languages and tools I have been
                        using the most recently
                    </motion.p>
                </AnimatePresence>
            </div>
        </div>
    );
}
