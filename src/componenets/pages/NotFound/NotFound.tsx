import React from "react";
import "./NotFound.scss";
import { motion } from 'framer-motion'

export default function NotFound() {
    return (
        <motion.div
            id="not-found-layout"
            className="absolute flex justify-center items-center w-full h-full"
        >
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.3}}
                className="flex justify-center relative w-full"
            >
                <div className="flex flex-col bp:items-start justify-center">
                    <div className="flex flex-row justify-center items-center">
                        <h1 className="text-center bp:text-left w-fit text-7xl font-bold">
                            404
                        </h1>
                        <img
                            src="./images/not-found-page/hedgehog.svg"
                            className="ml-5 w-20 h-20 font-medium"
                        />
                    </div>
                    <h1 className="text-center bp:text-left w-fit text-3xl">
                        Oops! This page doesn't exist.
                    </h1>
                </div>
            </motion.div>

            <div
                id="layered-waves"
                className="absolute bottom-0 bg-cover w-full bg-no-repeat bg-center h-1/2 xl:h-3/5"
            />
        </motion.div>
    );
}
