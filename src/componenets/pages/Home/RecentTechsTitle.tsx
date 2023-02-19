import React, { useEffect } from "react";
import { motion, AnimatePresence, useAnimation, AnimationControls} from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    const controls: AnimationControls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView]);

    return (
        <div className="flex justify-center items-center">
            <div 
                className="flex justify-center items-end w-full max-w-slider flex-col"
            >
                <motion.h1 
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={slideIn}
                    transition={transition}
                    className="font-bold text-right text-5xl">RECENT TECHS
                </motion.h1>
                <motion.p 
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={ {...slideIn, hidden: { x: -120, opacity: 0 } }}
                    transition={transition}
                    className="text-right font-light text-lg"
                >
                    These are the frameworks, languages and tools I have been
                    using the most recently
                </motion.p>
            </div>
        </div>
    );
}
