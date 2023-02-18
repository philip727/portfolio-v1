import React from "react";
import "./Home.css";
import { motion, AnimatePresence } from 'framer-motion'

export default function Home(): JSX.Element {
    const fallDistance = 60;
    const fallAnimationDuration = 0.2;

    const transition = {
        type: "spring",
        damping: 12,
        stiffness: 90,
        duration: 0.2,
    }


    return (
        <div>
            <section id="introduction-section">
                <div id="top-line" className="after:-skew-y-6 w-screen line-bg h-3 sm:h-6 relative isolate after:content-[''] after:absolute after:-z-10 after:inset-0 after:transition-colors after:duration-300" />
                <div id="middle-line" className="w-screen after:-skew-y-6 line-grad relative isolate after:absolute after:content-[''] after:inset-0 after:transition-colors after:duration-300 after:-z-10 h-60 sm:h-72 lg:h-96 flex justify-center items-center">
                    <div className="h-full w-full flex justify-center items-center flex-col m-4">
                        <AnimatePresence>
                            <div className="flex justify-center items-center gap-2 lg:gap-6 sm:gap-4">
                                    <motion.div key={0}  
                                        initial={{ x: -fallDistance, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={transition}
                                        className="side-line h-px sm:h-0.5 mp:w-24 bp:w-32 sm:w-40 md:w-48 lg:w-64 transition-colors duration-300" 
                                    />
                                    <motion.h1 key={1} 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={transition}
                                        className="sm:text-xl md:text-3xl lg:text-4xl text-lg font-bold"
                                    >ABOUT ME</motion.h1>
                                    <motion.div key={2} 
                                        initial={{ x: fallDistance, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={transition}
                                        className="side-line h-px sm:h-0.5 mp:w-24 bp:w-32 sm:w-40 md:w-48 lg:w-64 transition-colors duration-300" 
                                    />
                            </div>
                            <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                id="about-me-paragraph"  
                                className="text-center text-xs bp:text-sm sm:text-lg md:text-xl lg:text-2xl mt-0 md:mt-1 font-medium">
                                    Hello! My name is Philip and I am a 20 year old developer!<br /> 
                                    I have been programming since 2018 and have developed<br /> 
                                    almost daily since, and still love programming even more<br/>
                                    every day. Over the years I have used and learnt many<br/>languages.
                            </motion.p>
                        </AnimatePresence>
                    </div>
                </div>
                <div id="bottom-line" className="after:-skew-y-6 w-screen line-bg h-3 sm:h-6 relative isolate after:content-[''] after:absolute after:-z-10 after:inset-0 after:transition-colors after:duration-300" />
            </section>
        </div>
    );
}
