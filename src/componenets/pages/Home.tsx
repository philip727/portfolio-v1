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
                <div id="top-line" className="diagonal thin-line full-width line-bg" />
                <div id="middle-line" className="diagonal mega-thick-line full-width line-grad">
                    <div id="middle-wrapper">
                        <AnimatePresence>
                            <div id="middle-title-wrapper">
                                    <motion.div key={0}  
                                        initial={{ x: -fallDistance, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={transition}
                                        className="side-line" 
                                    />
                                    <motion.h1 key={1} 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={transition}
                                        className="big-title"
                                    >ABOUT ME</motion.h1>
                                    <motion.div key={2} 
                                        initial={{ x: fallDistance, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={transition}
                                        className="side-line" 
                                    />
                            </div>
                            <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                id="about-me-paragraph" 
                                className="sig-paragraph centred-paragraph">
                                    Hello! My name is Philip and I am a 20 year old developer! <br /> 
                                    I have been programming since 2018 and have developed almost <br /> 
                                    daily since, and still love programming even more every day.<br/>
                                    Over the years I have used and learnt many languages.
                            </motion.p>
                        </AnimatePresence>
                    </div>
                </div>
                <div id="bottom-line" className="diagonal thin-line full-width line-bg" />
            </section>
        </div>
    );
}
